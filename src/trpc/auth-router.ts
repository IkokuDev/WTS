import { getPayloadClient } from "../get-payload";
import { publicProcedure, router } from "./trpc";
import { AuthCredentialsValidator } from "../lib/validators/account-credentials-validator";
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { render } from '@react-email/render'
import { VerifyEmail } from "../components/emails/VerifyEmail"
import { resend } from "../lib/resend"
import { TRPCContext } from './trpc-context'

type TAuthCredentialsValidator = z.infer<typeof AuthCredentialsValidator>

export const authRouter = router({
  createPayloadUser: publicProcedure
    .input(AuthCredentialsValidator)
    .mutation(async ({ input }) => {
      const { email, password } = input;
      const payload = await getPayloadClient()
      //check if user exists
      const {docs: users} = await payload.find({
        collection: "users",
        where: {
            email: {
                equals: email
            }
        }
      })
      if(users.length!==0) throw new TRPCError({code: 'CONFLICT'})

      await payload.create({
        collection: "users",
        data: {
          email,
          password,
          role: 'customer',
          _verified: true,
        }
      })

      return { success: true }
    }),

  signIn: publicProcedure
    .input(AuthCredentialsValidator)
    .mutation(async ({ input }) => {
      const { email, password } = input
      const payload = await getPayloadClient()

      try {
        const result = await payload.login({
          collection: "users",
          data: {
            email,
            password,
          },
        })

        if (!result.token) {
          throw new TRPCError({ 
            code: "INTERNAL_SERVER_ERROR",
            message: "Failed to get authentication token"
          })
        }

        return { 
          success: true,
          token: result.token
        }
      } catch (err) {
        console.error('Login error:', err)
        throw new TRPCError({ code: "UNAUTHORIZED" })
      }
    }),

  verifyEmail: publicProcedure
    .input(z.object({ token: z.string() }))
    .query(async ({ input }) => {
      const { token } = input
      const payload = await getPayloadClient()

      const { docs: users } = await payload.find({
        collection: "users",
        where: {
          _verificationToken: {
            equals: token,
          },
        },
      })

      if (!users.length) {
        throw new TRPCError({ code: "UNAUTHORIZED" })
      }

      await payload.update({
        collection: "users",
        where: {
          id: {
            equals: users[0].id,
          },
        },
        data: {
          _verified: true,
          _verificationToken: undefined,
        },
      })

      return { success: true }
    })
})

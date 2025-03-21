import { inferAsyncReturnType } from '@trpc/server'
import { CreateExpressContextOptions } from '@trpc/server/adapters/express'

export const createContext = ({ req, res }: CreateExpressContextOptions) => ({
  req,
  res,
})

export type TRPCContext = inferAsyncReturnType<typeof createContext>

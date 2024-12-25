import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { appRouter } from '@/trpc'
import { createContext } from '@/trpc/trpc-context'

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: () => {
      return {
        req,
        res: new Response(),
      }
    },
  })

export { handler as GET, handler as POST }

import express from 'express'
import { getPayloadClient } from './get-payload'
import { nextApp, nextHandler } from './next-utils'
import * as trpcExpress from '@trpc/server/adapters/express'
import { appRouter } from './trpc'
import { Payload } from 'payload'
import { createContext } from './trpc/trpc-context'

const app = express()
const PORT = Number(process.env.PORT) || 3000

const start = async () => {
    try {
        const payload = await getPayloadClient({
            initOptions: {
                express: app,
                onInit: async (cms: Payload) => {
                    cms.logger.info(`Admin URL: ${cms.getAdminURL()}`)
                }
            }
        })

        app.use('/api/trpc', trpcExpress.createExpressMiddleware({
            router: appRouter,
            createContext
        }))

        app.use((req, res) => nextHandler(req, res))

        nextApp.prepare().then(() => {
            payload.logger.info('Next.js started')
            app.listen(PORT, async () => {
                payload.logger.info(`Next.js App URL: ${process.env.NEXT_PUBLIC_SERVER_URL}`)
            })
        })
    } catch (error) {
        console.error('Error starting server:', error)
    }
}

start()



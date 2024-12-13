import { buildConfig } from "payload/config";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { slateEditor } from "@payloadcms/richtext-slate";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import path from 'path';
import { Users } from "./collections/Users";
import { FleetOwners } from "./collections/FleetOwners";
import { Drivers } from "./collections/Drivers";
import { Vehicles } from "./collections/Vehicles";
import { Media } from "./collections/Media";

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
  collections: [Users, FleetOwners, Drivers, Vehicles, Media],
  routes: {
    admin: '/sell', // This means Payload admin will be at /sell
  },
  admin: {
    user: 'users',
    bundler: webpackBundler(),
    meta: {
      titleSuffix: '- TheSahel',
      favicon: '/favicon.ico',
      ogImage: '/og-image.png',
    },
  },
  
  cors: ['http://localhost:3000'],
  csrf: ['http://localhost:3000'],
  debug: true, // Set to true temporarily to see more logs
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.MONGODB_URL!,
  }),
  typescript: {
    outputFile: path.resolve(__dirname, '../payload-types.ts'),
  }
})

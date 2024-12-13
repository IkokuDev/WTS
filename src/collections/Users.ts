import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
    slug: 'users',
    auth: {
        verify: {
            generateEmailHTML: ({ token }) => {
                return `
                    <h1>Verify your account</h1>
                    <p>Click the link below to verify your account:</p>
                    <a href="${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}">Verify Account</a>
                `
            }
        },
        cookies: {
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            domain: process.env.COOKIE_DOMAIN,
        },
    },
    access: {
        read: () => true,
        create: () => true,
    },
    admin: {
        useAsTitle: 'email',
    },
    fields: [
        {
            name: 'role',
            required: true,
            defaultValue: 'customer',
            type: 'select',
            options: [
                { label: 'Admin', value: 'admin' },
                { label: 'Customer', value: 'customer' },
                { label: 'Fleet Owner', value: 'fleet_owner' },
                { label: 'Driver', value: 'driver' }
            ]
        },
        {
            name: 'name',
            type: 'text',
            required: true,
        }
    ]
}

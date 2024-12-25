import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
    slug: 'users',
    auth: true,
    access: {
        read: () => true,
        create: () => true,
    },
    fields: [
        {
            name: 'role',
            type: 'select',
            options: [
                { label: 'Admin', value: 'admin' },
                { label: 'Customer', value: 'customer' },
            ],
            required: true,
        },
        {
            name: '_verified',
            type: 'checkbox',
            access: {
                read: () => true,
                create: () => true,
                update: () => true,
            },
            admin: {
                position: 'sidebar',
            },
            defaultValue: false,
        },
        {
            name: '_verificationToken',
            type: 'text',
            access: {
                read: () => true,
                create: () => true,
                update: () => true,
            },
            admin: {
                position: 'sidebar',
            },
        },
    ]
}

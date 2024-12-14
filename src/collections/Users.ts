import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
    slug: 'users',
    auth: true,
    admin: {
        useAsTitle: 'email',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'role',
            type: 'select',
            required: true,
            options: [
                { label: 'Admin', value: 'admin' },
                { label: 'Customer', value: 'customer' },
                { label: 'Fleet Owner', value: 'fleet_owner' },
                { label: 'Driver', value: 'driver' },
                {label: 'Vendor', value: 'vendor'}
            ]
        },
        {
            name: 'name',
            type: 'text',
            required: true,
        }
    ]
}

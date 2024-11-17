import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
    slug: 'users',
    auth: {
        verify: {
            generateEmailHTML:({token}) => {
                return `
                    <h1>Verify your account</h1>
                    <p>Click the link below to verify your account:</p>
                    
                `
            }
        }
    },
    access: {
        read: () => true,
        create: () => true,
    },
    fields: [
        {
            name: 'role',
            required: true,
            defaultValue: "user",
            
            type: 'select',
            options:[
                {label: "Admin", value: "admin"},
                {label: "Users", value: "users"}
            ]
        }
    ]
}
import { CollectionConfig } from 'payload/types'

export const Drivers: CollectionConfig = {
  slug: 'drivers',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      hasMany: false,
    },
    {
      name: 'fleetOwner',
      type: 'relationship',
      relationTo: 'fleet-owners',
      required: true,
      hasMany: false,
    },
    {
      name: 'licenseNumber',
      type: 'text',
      required: true,
    },
    {
      name: 'licenseExpiry',
      type: 'date',
      required: true,
    },
    {
      name: 'experience',
      type: 'number',
      required: true,
      min: 0,
    },
    {
      name: 'documents',
      type: 'group',
      fields: [
        {
          name: 'driverLicense',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'medicalCertificate',
          type: 'upload',
          relationTo: 'media',
          required: true,
        }
      ]
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'AVAILABLE',
      options: [
        { label: 'Available', value: 'AVAILABLE' },
        { label: 'On Trip', value: 'ON_TRIP' },
        { label: 'Off Duty', value: 'OFF_DUTY' }
      ],
      required: true,
    },
    {
      name: 'assignedVehicle',
      type: 'relationship',
      relationTo: 'vehicles',
      hasMany: false,
    }
  ]
}
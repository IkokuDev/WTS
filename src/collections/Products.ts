import { CollectionConfig } from 'payload/types'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      min: 0,
    },
    {
      name: 'vendor',
      type: 'relationship',
      relationTo: 'vendors',
      required: true,
      hasMany: false,
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Solid Minerals', value: 'solid_minerals' },
        { label: 'Agriculture', value: 'agric_products' },
        { label: 'Building Materials', value: 'raw_materials' },
        { label: 'Petrol & Gas', value: 'petrol_gas' }
      ]
    },
    {
      name: 'images',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 4,
      labels: {
        singular: 'Image',
        plural: 'Images',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        }
      ]
    },
    {
      name: 'priceUnit',
      type: 'select',
      required: true,
      options: [
        { label: 'Per Ton', value: 'per_ton' },
        { label: 'Per Kg', value: 'per_kg' },
        { label: 'Per Litre', value: 'per_litre' },
        { label: 'Per Cubic Meter', value: 'per_cubic_meter' },
      ]
    },
    // Inventory Tracking
    {
      name: 'inventory',
      type: 'group',
      fields: [
        {
          name: 'quantity',
          type: 'number',
          required: true,
          min: 0,
        },
        {
          name: 'lowStockThreshold',
          type: 'number',
          required: true,
          min: 0,
        },
        {
          name: 'trackingEnabled',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'allowBackorders',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'reservedQuantity',
          type: 'number',
          required: true,
          defaultValue: 0,
          min: 0,
        }
      ]
    },
    // Bulk Pricing Tiers
    {
      name: 'bulkPricing',
      type: 'array',
      fields: [
        {
          name: 'minimumQuantity',
          type: 'number',
          required: true,
          min: 1,
        },
        {
          name: 'pricePerUnit',
          type: 'number',
          required: true,
          min: 0,
        },
        {
          name: 'unit',
          type: 'select',
          required: true,
          options: [
            { label: 'Tons', value: 'tons' },
            { label: 'Kg', value: 'kg' },
            { label: 'Litres', value: 'litres' },
            { label: 'Cubic Meters', value: 'm3' },
          ]
        }
      ]
    },
    // Shipping Options
    {
      name: 'shipping',
      type: 'group',
      fields: [
        {
          name: 'weight',
          type: 'number',
          required: true,
          min: 0,
        },
        {
          name: 'dimensions',
          type: 'group',
          fields: [
            {
              name: 'length',
              type: 'number',
              required: true,
              min: 0,
            },
            {
              name: 'width',
              type: 'number',
              required: true,
              min: 0,
            },
            {
              name: 'height',
              type: 'number',
              required: true,
              min: 0,
            }
          ]
        },
        {
          name: 'shippingMethods',
          type: 'array',
          fields: [
            {
              name: 'method',
              type: 'select',
              required: true,
              options: [
                { label: 'Road Freight', value: 'road_freight' },
                { label: 'Rail Freight', value: 'rail_freight' },
                { label: 'Sea Freight', value: 'sea_freight' },
                { label: 'Air Freight', value: 'air_freight' },
              ]
            },
            {
              name: 'estimatedDays',
              type: 'number',
              required: true,
              min: 1,
            },
            {
              name: 'pricePerKm',
              type: 'number',
              required: true,
              min: 0,
            }
          ]
        },
        {
          name: 'specialHandling',
          type: 'checkbox',
          label: 'Requires Special Handling',
        },
        {
          name: 'handlingInstructions',
          type: 'textarea',
          admin: {
            condition: (data) => data.specialHandling,
          }
        }
      ]
    },
    // Product Variants
    {
      name: 'variants',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'sku',
          type: 'text',
          required: true,
          unique: true,
        },
        {
          name: 'attributes',
          type: 'group',
          fields: [
            {
              name: 'grade',
              type: 'select',
              options: [
                { label: 'Premium', value: 'premium' },
                { label: 'Standard', value: 'standard' },
                { label: 'Economy', value: 'economy' },
              ]
            },
            {
              name: 'purity',
              type: 'number',
              min: 0,
              max: 100,
            },
            {
              name: 'composition',
              type: 'text',
            }
          ]
        },
        {
          name: 'price',
          type: 'number',
          required: true,
          min: 0,
        },
        {
          name: 'inventory',
          type: 'number',
          required: true,
          min: 0,
        }
      ]
    },
    {
      name: 'specifications',
      type: 'group',
      fields: [
        {
          name: 'weight',
          type: 'number',
          required: true,
          min: 0,
        },
        {
          name: 'dimensions',
          type: 'group',
          fields: [
            {
              name: 'length',
              type: 'number',
              required: true,
              min: 0,
            },
            {
              name: 'width',
              type: 'number',
              required: true,
              min: 0,
            },
            {
              name: 'height',
              type: 'number',
              required: true,
              min: 0,
            }
          ]
        }
      ]
    },
    {
      name: 'minimumOrder',
      type: 'group',
      fields: [
        {
          name: 'quantity',
          type: 'number',
          required: true,
          min: 1,
        },
        {
          name: 'unit',
          type: 'select',
          required: true,
          options: [
            { label: 'Tons', value: 'tons' },
            { label: 'Kg', value: 'kg' },
            { label: 'Litres', value: 'litres' },
            { label: 'Cubic Meters', value: 'm3' },
          ]
        }
      ]
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'active',
      options: [
        { label: 'Active', value: 'active' },
        { label: 'Draft', value: 'draft' },
        { label: 'Out of Stock', value: 'out_of_stock' },
      ]
    },
    {
      name: 'certificates',
      type: 'array',
      fields: [
        {
          name: 'certificate',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'certificateType',
          type: 'select',
          required: true,
          options: [
            { label: 'Quality Assurance', value: 'quality_assurance' },
            { label: 'Safety Certificate', value: 'safety' },
            { label: 'Origin Certificate', value: 'origin' },
            { label: 'Other', value: 'other' }
          ]
        }
      ]
    }
  ]
}
import { CollectionConfig } from "payload/types"

export const Orders: CollectionConfig = {
  slug: "orders",
  admin: {
    useAsTitle: "id",
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: "user",
      type: "relationship",
      relationTo: "users",
      required: true,
      hasMany: false,
    },
    {
      name: "seller",
      type: "relationship",
      relationTo: "users",
      required: true,
      hasMany: false,
    },
    {
      name: "products",
      type: "array",
      required: true,
      fields: [
        {
          name: "product",
          type: "relationship",
          relationTo: "products",
          required: true,
          hasMany: false,
        },
        {
          name: "quantity",
          type: "number",
          required: true,
        },
      ],
    },
    {
      name: "total",
      type: "number",
      required: true,
    },
    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "PENDING",
      options: [
        { label: "Pending", value: "PENDING" },
        { label: "Payment Held in Escrow", value: "PAYMENT_ESCROWED" },
        { label: "Shipped", value: "SHIPPED" },
        { label: "Delivered", value: "DELIVERED" },
        { label: "Inspection Passed", value: "INSPECTION_PASSED" },
        { label: "Payment Released", value: "PAYMENT_RELEASED" },
        { label: "Disputed", value: "DISPUTED" },
        { label: "Refunded", value: "REFUNDED" },
        { label: "Cancelled", value: "CANCELLED" },
      ],
    },
    {
      name: "paymentStatus",
      type: "select",
      required: true,
      defaultValue: "PENDING",
      options: [
        { label: "Pending", value: "PENDING" },
        { label: "Held in Escrow", value: "IN_ESCROW" },
        { label: "Released to Seller", value: "RELEASED" },
        { label: "Refunded to Buyer", value: "REFUNDED" },
      ],
    },
    {
      name: "escrowDetails",
      type: "group",
      fields: [
        {
          name: "escrowId",
          type: "text",
          admin: {
            description: "External escrow service reference ID",
          },
        },
        {
          name: "releaseCode",
          type: "text",
          admin: {
            description: "Code required to release funds",
          },
        },
        {
          name: "inspectionDeadline",
          type: "date",
          admin: {
            description: "Deadline for buyer to inspect goods",
          },
        },
        {
          name: "disputeReason",
          type: "text",
          admin: {
            description: "Reason if order is disputed",
          },
        },
      ],
    },
    {
      name: "paymentProvider",
      type: "select",
      defaultValue: "STRIPE",
      options: [
        { label: "Stripe", value: "STRIPE" },
        { label: "Bank Transfer", value: "BANK_TRANSFER" },
      ],
    },
    {
      name: "paymentMetadata",
      type: "json",
      admin: {
        description: "Additional payment details from provider",
      },
    },
  ],
}

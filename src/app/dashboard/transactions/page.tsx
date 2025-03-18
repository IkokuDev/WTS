'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'
import { Button } from '@/components/ui/button'
import { formatDistance } from 'date-fns'

interface Transaction {
  id: string
  orderId: string
  status: string
  amount: number
  buyerId: string
  sellerId: string
  createdAt: Date
  inspectionDeadline: Date
  escrowId: string
}

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const router = useRouter()

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'PAYMENT_ESCROWED':
        return 'bg-blue-100 text-blue-800'
      case 'INSPECTION_PASSED':
        return 'bg-green-100 text-green-800'
      case 'DISPUTED':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const handleInspectionPass = async (transactionId: string) => {
    try {
      // TODO: Implement inspection pass API call
      toast.success('Inspection passed successfully')
    } catch (error) {
      toast.error('Failed to process inspection')
    }
  }

  const handleDispute = async (transactionId: string) => {
    try {
      // TODO: Implement dispute API call
      toast.success('Dispute filed successfully')
    } catch (error) {
      toast.error('Failed to file dispute')
    }
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Escrow Transactions</h1>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Order ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Inspection Deadline
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-medium text-gray-900">
                    {transaction.orderId}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                      transaction.status
                    )}`}
                  >
                    {transaction.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-900">
                    ${transaction.amount.toFixed(2)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-900">
                    {formatDistance(new Date(transaction.inspectionDeadline), new Date(), {
                      addSuffix: true,
                    })}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  {transaction.status === 'PAYMENT_ESCROWED' && (
                    <>
                      <Button
                        onClick={() => handleInspectionPass(transaction.id)}
                        variant="outline"
                        className="text-green-600 hover:text-green-900"
                      >
                        Pass Inspection
                      </Button>
                      <Button
                        onClick={() => handleDispute(transaction.id)}
                        variant="outline"
                        className="text-red-600 hover:text-red-900"
                      >
                        Dispute
                      </Button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
} 
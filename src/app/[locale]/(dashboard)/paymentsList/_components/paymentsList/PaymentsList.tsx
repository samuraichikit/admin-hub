'use client'

import { Column, CommonTableWithPagination } from '@/components/ui'
import { useGetPaymentsQuery } from '@/services/paymentsService.generated'
import { SubscriptionPaymentsModel } from '@/services/types'

import { Avatar } from '../avatar'

export const PaymentsList = () => {
  const columns: Column<SubscriptionPaymentsModel>[] = [
    {
      accessor: 'userName',
      sortable: true,
      title: 'Username',
      Cell: row => <Avatar src={row.avatars?.[0]?.url ?? ''} />,
    },
    { accessor: 'createdAt', title: 'Date added' },

    { accessor: 'amount', title: `Amount, $`, Cell: row => row.currency },
    { accessor: 'type', title: 'Subscription' },
    { accessor: 'paymentMethod', sortable: true, title: 'Payment Method' },
  ]
  const { data } = useGetPaymentsQuery({ variables: { pageNumber: 1, pageSize: 6 } })
  const paymentsData = data?.getPayments.items ?? []

  return (
    <>
      <CommonTableWithPagination
        columns={columns}
        currentPage={1}
        onPageChange={() => {}}
        tableBodyData={paymentsData}
        totalCount={100}
        pageSize={6}
        onPageSizeChange={() => {}}
      />
    </>
  )
}

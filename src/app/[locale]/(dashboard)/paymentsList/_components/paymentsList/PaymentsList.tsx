'use client'

import { DEFAULT_PAGE_NUMBER, PAYMENTS_LIST_PAGE_SIZE } from '@/common/constants'
import { useCommonTablePagination, useSort } from '@/common/hooks'
import { Column, CommonTableWithPagination } from '@/components/ui'
import { useGetPaymentsQuery } from '@/services/paymentsService.generated'
import { SortDirection, SubscriptionPaymentsModel } from '@/services/types'

import { AmountRow } from '../amountRow'
import { UserRow } from '../userRow'

type PaymentColumn = Column<SubscriptionPaymentsModel>
type PaymentColumnAccessor = PaymentColumn['accessor']

export const PaymentsList = () => {
  const columns: PaymentColumn[] = [
    {
      accessor: 'userName',
      sortable: true,
      title: 'Username',
      Cell: row => <UserRow src={row.avatars?.[0]?.url ?? ''} userName={row.userName} />,
    },
    { accessor: 'createdAt', title: 'Date added', sortable: true },

    {
      accessor: 'amount',
      title: `Amount, $`,
      Cell: row => <AmountRow amount={row.amount ?? 0} currency={row.currency ?? ''} />,
      sortable: true,
    },
    { accessor: 'type', title: 'Subscription' },
    { accessor: 'paymentMethod', sortable: true, title: 'Payment Method' },
  ]
  const { handleChangeCurrentPage, handlePageSizeChange, pageNumber, pageSize } =
    useCommonTablePagination({
      defaultPageNumber: DEFAULT_PAGE_NUMBER,
      defaultPageSize: PAYMENTS_LIST_PAGE_SIZE,
    })
  const { handleChangeSort, sortBy, sortDirection } = useSort<PaymentColumnAccessor>({
    defaultSortBy: 'createdAt',
    defaultSortDirection: SortDirection.Desc,
  })
  const { data } = useGetPaymentsQuery({
    variables: { pageNumber, pageSize, sortBy, sortDirection },
  })

  const paymentsData = data?.getPayments.items ?? []
  const perPageOptions = [6, 10, 20, 50, 100]

  return (
    <>
      <CommonTableWithPagination
        columns={columns}
        currentPage={pageNumber}
        onPageChange={handleChangeCurrentPage}
        onChangeSort={handleChangeSort}
        tableBodyData={paymentsData}
        totalCount={100}
        pageSize={pageSize}
        onPageSizeChange={handlePageSizeChange}
        showPerPageSelect
        perPageOptions={perPageOptions}
        sortColumn={sortBy}
        sortDirection={sortDirection}
      />
    </>
  )
}

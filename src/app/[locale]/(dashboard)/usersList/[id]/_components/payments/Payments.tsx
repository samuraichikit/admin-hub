'use client'

import {
  DEFAULT_HEIGHT_COMMON_TABLE_ROW,
  DEFAULT_PAGE_NUMBER,
  DEFAULT_PAGE_SIZE,
} from '@/common/constants'
import { useSort, useTranslation, useCommonTablePagination } from '@/common/hooks'
import {
  Column,
  CommonTableWithPagination,
  CommonTableWithPaginationSkeleton,
} from '@/components/ui/commonTableWithPagination'
import { SortDirection } from '@/services/types'
import { GetPaymentsByUserQuery, useGetPaymentsByUserQuery } from '@/services/userService.generated'
import { useParams } from 'next/navigation'

type PaymentColumn = Column<GetPaymentsByUserQuery['getPaymentsByUser']['items'][number]>
type PaymentColumnAccessors = PaymentColumn['accessor']

export const Payments = () => {
  const { t } = useTranslation()
  const columns: PaymentColumn[] = [
    { accessor: 'dateOfPayment', sortable: true, title: t.userPage.dateOfPayment },
    { accessor: 'endDate', title: t.userPage.endDateOfSubscription },
    { accessor: 'price', title: `${t.userPage.amount}, $` },
    { accessor: 'type', title: t.userPage.subscriptionType },
    { accessor: 'paymentType', sortable: true, title: t.userPage.paymentType },
  ]
  const { id } = useParams()
  const userId = Number(id)

  const { handleChangeCurrentPage, handlePageSizeChange, pageNumber, pageSize } =
    useCommonTablePagination({
      defaultPageNumber: DEFAULT_PAGE_NUMBER,
      defaultPageSize: DEFAULT_PAGE_SIZE,
    })
  const { handleChangeSort, sortBy, sortDirection } = useSort<PaymentColumnAccessors>({
    defaultSortBy: 'dateOfPayment',
    defaultSortDirection: SortDirection.Desc,
  })

  const { data, loading } = useGetPaymentsByUserQuery({
    variables: { pageNumber, pageSize, sortBy, sortDirection, userId },
  })

  const paymentsData = data?.getPaymentsByUser.items ?? []
  const totalCount = data?.getPaymentsByUser.totalCount ?? 0

  if (loading) {
    return (
      <CommonTableWithPaginationSkeleton
        count={DEFAULT_PAGE_SIZE + 1}
        height={DEFAULT_HEIGHT_COMMON_TABLE_ROW}
      />
    )
  }

  return (
    <CommonTableWithPagination
      columns={columns}
      currentPage={pageNumber}
      onChangeSort={handleChangeSort}
      onPageChange={handleChangeCurrentPage}
      onPageSizeChange={handlePageSizeChange}
      pageSize={pageSize}
      sortColumn={sortBy}
      sortDirection={sortDirection}
      tableBodyData={paymentsData}
      totalCount={totalCount}
    />
  )
}

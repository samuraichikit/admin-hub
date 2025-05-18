'use client'

import { ChangeEvent } from 'react'

import { DEFAULT_PAGE_NUMBER, PAYMENTS_LIST_PAGE_SIZE } from '@/common/constants'
import {
  useCommonTablePagination,
  useDebounce,
  useQueryParams,
  useSort,
  useTranslation,
} from '@/common/hooks'
import { Column, CommonTableWithPagination } from '@/components/ui'
import { useGetPaymentsQuery } from '@/services/paymentsService.generated'
import { SortDirection, SubscriptionPaymentsModel } from '@/services/types'
import { TextField } from '@samuraichikit/inc-ui-kit'

import s from './paymentsList.module.scss'

import { AmountRow } from '../amountRow'
import { UserRow } from '../userRow'

type PaymentColumn = Column<SubscriptionPaymentsModel>
type PaymentColumnAccessor = PaymentColumn['accessor']

export const PaymentsList = () => {
  const classNames = {
    container: s.container,
    textField: s.textField,
  }
  const { t } = useTranslation()
  const columns: PaymentColumn[] = [
    {
      accessor: 'userName',
      sortable: true,
      title: t.paymentsList.userName,
      Cell: row => <UserRow src={row.avatars?.[0]?.url ?? ''} userName={row.userName} />,
    },
    { accessor: 'createdAt', title: t.paymentsList.dateAdded, sortable: true },

    {
      accessor: 'amount',
      title: `${t.paymentsList.amount}, $`,
      Cell: row => <AmountRow amount={row.amount ?? 0} currency={row.currency ?? ''} />,
      sortable: true,
    },
    { accessor: 'type', title: t.paymentsList.dateAdded },
    { accessor: 'paymentMethod', sortable: true, title: t.paymentsList.paymentMethod },
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
  const { searchParams, setQueryParams } = useQueryParams()
  const searchTerm = useDebounce(searchParams.get('searchTerm'))
  const perPageOptions = [6, 10, 20, 50, 100]

  const { data } = useGetPaymentsQuery({
    variables: { pageNumber, pageSize, sortBy, sortDirection, searchTerm },
  })

  const paymentsData = data?.getPayments.items ?? []
  const totalCount = data?.getPayments.totalCount ?? 0

  const handleSearchUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setQueryParams({ searchTerm: e.currentTarget.value })
  }

  return (
    <div className={classNames.container}>
      <TextField
        onChange={handleSearchUsername}
        type={'search'}
        placeholder={t.paymentsList.search}
        className={classNames.textField}
      />
      <CommonTableWithPagination
        columns={columns}
        currentPage={pageNumber}
        onPageChange={handleChangeCurrentPage}
        onChangeSort={handleChangeSort}
        tableBodyData={paymentsData}
        totalCount={totalCount}
        pageSize={pageSize}
        onPageSizeChange={handlePageSizeChange}
        showPerPageSelect
        perPageOptions={perPageOptions}
        sortColumn={sortBy}
        sortDirection={sortDirection}
      />
    </div>
  )
}

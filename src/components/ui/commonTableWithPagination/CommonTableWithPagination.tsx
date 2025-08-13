import { useTranslation } from '@/common/hooks/useTranslation'
import { Pagination, PaginationProps, Typography } from '@samuraichikit/inc-ui-kit'

import s from './commonTableWithPagination.module.scss'

import { CommonTable, CommonTableProps } from './commonTable'

type Props<T> = CommonTableProps<T> & PaginationProps

export const CommonTableWithPagination = <T,>({
  columns,
  onChangeSort,
  sortColumn,
  sortDirection,
  tableBodyData,
  ...rest
}: Props<T>) => {
  const classNames = {
    pagination: s.pagination,
    text: s.text,
    container: s.container,
  }

  const { t } = useTranslation()

  const isEmptyArray = tableBodyData.length === 0

  if (isEmptyArray) {
    return (
      <Typography className={classNames.text} variant={'bold_text_16'}>
        {t.commonTableWithPagination.noData}
      </Typography>
    )
  }

  return (
    <div className={classNames.container}>
      <CommonTable
        columns={columns}
        onChangeSort={onChangeSort}
        sortColumn={sortColumn}
        sortDirection={sortDirection}
        tableBodyData={tableBodyData}
      />
      <Pagination
        className={classNames.pagination}
        {...rest}
        afterSelectContent={t.commonTableWithPagination.afterSelectContent}
        beforeSelectContent={t.commonTableWithPagination.beforeSelectContent}
      />
    </div>
  )
}

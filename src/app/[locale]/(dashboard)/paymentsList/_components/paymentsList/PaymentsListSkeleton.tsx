import Skeleton from 'react-loading-skeleton'

import { DEFAULT_HEIGHT_PAYMENTS_LIST_TABLE_ROW } from '@/common/constants'
import { CommonTableWithPaginationSkeleton } from '@/components/ui'

import s from './paymentsList.module.scss'

type Props = {
  tableRowsCount: number
}

export const PaymentsListSkeleton = ({ tableRowsCount }: Props) => {
  const classNames = {
    container: s.container,
    textField: s.textField,
  }

  return (
    <div className={classNames.container}>
      <Skeleton height={32} className={classNames.textField} />
      <CommonTableWithPaginationSkeleton
        count={tableRowsCount + 1}
        height={DEFAULT_HEIGHT_PAYMENTS_LIST_TABLE_ROW}
      />
    </div>
  )
}

'use client'

import {
  DEFAULT_HEIGHT_COMMON_TABLE_ROW,
  DEFAULT_PAGE_NUMBER,
  DEFAULT_PAGE_SIZE,
} from '@/common/constants'
import { useCommonTablePagination } from '@/common/hooks/useCommonTablePagination'
import { FollowAccessors, useFollow } from '@/common/hooks/useFollow'
import { useSort } from '@/common/hooks/useSort'
import { CommonTableWithPagination, CommonTableWithPaginationSkeleton } from '@/components/ui'
import { SortDirection } from '@/services/types'
import { useGetFollowingQuery } from '@/services/userService.generated'
import { useParams } from 'next/navigation'

export const Following = () => {
  const { id } = useParams()
  const userId = Number(id)

  const { handleChangeCurrentPage, handlePageSizeChange, pageNumber, pageSize } =
    useCommonTablePagination({
      defaultPageNumber: DEFAULT_PAGE_NUMBER,
      defaultPageSize: DEFAULT_PAGE_SIZE,
    })
  const { handleChangeSort, sortBy, sortDirection } = useSort<FollowAccessors>({
    defaultSortBy: 'createdAt',
    defaultSortDirection: SortDirection.Desc,
  })

  const { data: followingData, loading } = useGetFollowingQuery({
    variables: { pageNumber, pageSize, sortBy, sortDirection, userId },
  })

  const following = followingData?.getFollowing.items ?? []
  const totalCount = followingData?.getFollowing.totalCount ?? 0

  const {
    columns,
    itemsWithFullNames: followingWithFullNames,
    loadingGetFullName,
  } = useFollow({ items: following })

  if (loading || loadingGetFullName) {
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
      tableBodyData={followingWithFullNames}
      totalCount={totalCount}
    />
  )
}

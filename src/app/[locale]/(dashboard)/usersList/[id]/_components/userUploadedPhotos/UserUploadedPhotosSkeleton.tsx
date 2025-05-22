'use client'

import Skeleton, { SkeletonProps } from 'react-loading-skeleton'

import s from './userUploadedPhotos.module.scss'

export const UploadedPhotosSkeleton = ({ count, ...rest }: SkeletonProps) => {
  const classNames = {
    container: s.container,
    imageWrapper: s.imageWrapper,
    skeletonItem: s.skeletonItem,
  }

  return (
    <div className={classNames.container}>
      {Array.from({ length: count ?? 1 }).map((_, index) => (
        <div key={index} className={classNames.imageWrapper}>
          <Skeleton {...rest} className={classNames.skeletonItem} />
        </div>
      ))}
    </div>
  )
}

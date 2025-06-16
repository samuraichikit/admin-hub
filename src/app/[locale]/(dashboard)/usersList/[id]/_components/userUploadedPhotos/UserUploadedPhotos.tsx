'use client'

import { useEffect, useRef, useState } from 'react'

import { useElementInView } from '@/common/hooks/useElementInView'
import { formatDate } from '@/common/utils'
import { ImagePost } from '@/services/types'
import {
  useGetPostsByUserLazyQuery,
  useGetPostsByUserQuery,
} from '@/services/userService.generated'
import Image from 'next/image'
import { useParams } from 'next/navigation'

import s from './userUploadedPhotos.module.scss'

import { UploadedPhotosSkeleton } from './UserUploadedPhotosSkeleton'

export const UserUploadedPhotos = () => {
  const classNames = {
    container: s.container,
    imageWrapper: s.imageWrapper,
  }
  const { id } = useParams()
  const userId = Number(id)

  const [pageNumber, setPageNumber] = useState(1)
  const endCursorPostIdRef = useRef<null | number>(null)
  const { data, loading } = useGetPostsByUserQuery({ variables: { userId } })
  const [getPostsByUserLazy] = useGetPostsByUserLazyQuery()
  const [photos, setPhotos] = useState<ImagePost[]>([])
  const { isInView, targetRef } = useElementInView({ threshold: 0.8 })

  const { items, pagesCount } = data?.getPostsByUser ?? {}
  const totalPagesCount = pagesCount ?? 0

  const isSetNextPage = isInView && pageNumber < totalPagesCount

  useEffect(() => {
    if (pageNumber === 1 && items?.length) {
      setPhotos([...items])
    }
  }, [pageNumber, items])

  useEffect(() => {
    const fetchPosts = async () => {
      const { data: lazyData } = await getPostsByUserLazy({
        variables: { endCursorId: endCursorPostIdRef.current, userId },
      })

      if (lazyData?.getPostsByUser.items) {
        setPhotos(prev => [...prev, ...(lazyData?.getPostsByUser.items as ImagePost[])])
      }
    }

    if (pageNumber > 1 && pageNumber < totalPagesCount) {
      fetchPosts()
    }
  }, [pageNumber])

  useEffect(() => {
    endCursorPostIdRef.current = photos[photos.length - 1]?.id ?? null
  }, [photos])

  useEffect(() => {
    if (isSetNextPage) {
      setPageNumber(prev => prev + 1)
    }
  }, [isSetNextPage])

  if (loading) {
    return <UploadedPhotosSkeleton count={12} />
  }

  return (
    <div className={classNames.container}>
      {photos?.map((item, index) => {
        return (
          <div
            key={item.id}
            ref={index === photos.length - 1 ? targetRef : null}
            className={classNames.imageWrapper}
          >
            <Image
              alt={`Image uploaded on ${formatDate(item.createdAt)}`}
              src={item.url ?? ''}
              fill
            />
          </div>
        )
      })}
    </div>
  )
}

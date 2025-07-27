'use client'
import { ChangeEvent, useEffect, useState } from 'react'

import { SortByType } from '@/common/constants/types'
import { useTranslation } from '@/common/hooks'
import { ImagesSlider } from '@/components/ui/imagesSlider/ImagesSlider'
import { GET_POSTS } from '@/services/postsListService'
import { GetPostsQuery } from '@/services/postsListService.generated'
import { POSTS_SUBSCRIPTION } from '@/services/postsSubscriptionService'
import { SortDirection } from '@/services/types'
import { useQuery, useSubscription } from '@apollo/client'
import { TextField, Typography } from '@samuraichikit/inc-ui-kit'
import { formatDistanceToNow } from 'date-fns'

import styles from './postList.module.scss'

export const PostsList = () => {
  const [posts, setPosts] = useState<GetPostsQuery['getPosts']['items']>([])
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [expandedPosts, setExpandedPosts] = useState<{ [postId: number]: boolean }>({})
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')
  const { dateFnsLocale } = useTranslation()
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase())
  }
  const { data, loading, error } = useQuery<GetPostsQuery>(GET_POSTS, {
    variables: {
      pageSize: 20,
      endCursorPostId: 0,
      sortBy: SortByType.CreatedAt,
      sortDirection: SortDirection.Desc,
      searchTerm: debouncedSearchTerm,
    },
    fetchPolicy: 'network-only',
  })

  const { data: subscriptionData } = useSubscription(POSTS_SUBSCRIPTION)

  useEffect(() => {
    if (data?.getPosts?.items) {
      setPosts(data.getPosts.items)
    }
  }, [data])

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm)
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [searchTerm])

  useEffect(() => {
    if (subscriptionData?.postAdded) {
      setPosts(prev => [subscriptionData.postAdded, ...prev])
    }
  }, [subscriptionData])

  if (loading) {
    return <p>Loading posts...</p>
  }
  if (error) {
    return <p>Error loading posts</p>
  }

  const toggleDescription = (postId: number) => {
    setExpandedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId],
    }))
  }

  return (
    <div className={styles.root}>
      <TextField
        onChange={handleChange}
        value={searchTerm}
        style={{ width: '100%' }}
        type={'search'}
      />
      <div className={styles.container}>
        {posts.map(post => {
          const fullName = `${post.postOwner.firstName ?? ''} ${
            post.postOwner.lastName ?? ''
          }`.trim()
          const displayName = fullName || post.postOwner.userName
          const avatarUrl = post.postOwner.avatars?.[0]?.url
          const shortText = post.description.slice(0, 65)
          const isExpanded = expandedPosts[post.id] || false

          return (
            <div key={post.id} className={styles.card}>
              <ImagesSlider images={post.images} />
              <div className={`${styles.content} ${isExpanded ? styles.expandedContent : ''}`}>
                <div className={styles.profile}>
                  <div className={styles.profileInfo}>
                    <img
                      src={
                        avatarUrl ?? `https://api.dicebear.com/7.x/initials/svg?seed=${displayName}`
                      }
                      alt={'Avatar'}
                      className={styles.avatar}
                    />
                    <Typography variant={'h3'}>{displayName}</Typography>
                  </div>
                  <Typography className={styles.time} variant={'small_text'}>
                    {formatDistanceToNow(new Date(post.createdAt), {
                      addSuffix: true,
                      locale: dateFnsLocale,
                    })}
                  </Typography>
                </div>
                <div className={`${styles.text} ${isExpanded ? styles.expanded : ''}`}>
                  <div className={styles.descriptionWrapper}>
                    {post.description.length < 100 ? (
                      <Typography variant={'regular_text_14'} className={styles.descriptionText}>
                        {post.description}
                      </Typography>
                    ) : (
                      <Typography variant={'regular_text_14'} className={styles.descriptionText}>
                        {isExpanded ? post.description : shortText + '...'}
                        <span
                          onClick={() => toggleDescription(post.id)}
                          className={styles.showMore}
                        >
                          {isExpanded ? 'Hide' : 'Show more'}
                        </span>
                      </Typography>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

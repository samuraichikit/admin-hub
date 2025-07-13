import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

import * as Types from './types'
const defaultOptions = {} as const

export type GetPostsQueryVariables = Types.Exact<{
  pageSize?: Types.InputMaybe<Types.Scalars['Int']['input']>
  endCursorPostId?: Types.InputMaybe<Types.Scalars['Int']['input']>
  sortBy?: Types.InputMaybe<Types.Scalars['String']['input']>
  sortDirection?: Types.InputMaybe<Types.SortDirection>
  searchTerm?: Types.InputMaybe<Types.Scalars['String']['input']>
}>

export type GetPostsQuery = {
  __typename?: 'Query'
  getPosts: {
    __typename?: 'PostsPaginationModel'
    totalCount: number
    pagesCount: number
    pageSize: number
    items: Array<{
      __typename?: 'Post'
      id: number
      description: string
      createdAt: any
      images?: Array<{ __typename?: 'ImagePost'; url?: string | null }> | null
      postOwner: {
        __typename?: 'PostOwnerModel'
        userName: string
        firstName?: string | null
        lastName?: string | null
        avatars?: Array<{ __typename?: 'Avatar'; url?: string | null }> | null
      }
    }>
  }
}

export const GetPostsDocument = gql`
  query GetPosts(
    $pageSize: Int
    $endCursorPostId: Int
    $sortBy: String
    $sortDirection: SortDirection
    $searchTerm: String
  ) {
    getPosts(
      pageSize: $pageSize
      endCursorPostId: $endCursorPostId
      sortBy: $sortBy
      sortDirection: $sortDirection
      searchTerm: $searchTerm
    ) {
      items {
        id
        description
        createdAt
        images {
          url
        }
        postOwner {
          userName
          firstName
          lastName
          avatars {
            url
          }
        }
      }
      totalCount
      pagesCount
      pageSize
    }
  }
`

/**
 * __useGetPostsQuery__
 *
 * To run a query within a React component, call `useGetPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsQuery({
 *   variables: {
 *      pageSize: // value for 'pageSize'
 *      endCursorPostId: // value for 'endCursorPostId'
 *      sortBy: // value for 'sortBy'
 *      sortDirection: // value for 'sortDirection'
 *      searchTerm: // value for 'searchTerm'
 *   },
 * });
 */
export function useGetPostsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetPostsQuery, GetPostsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options)
}
export function useGetPostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetPostsQuery, GetPostsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options)
}
export function useGetPostsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetPostsQuery, GetPostsQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }

  return Apollo.useSuspenseQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options)
}
export type GetPostsQueryHookResult = ReturnType<typeof useGetPostsQuery>
export type GetPostsLazyQueryHookResult = ReturnType<typeof useGetPostsLazyQuery>
export type GetPostsSuspenseQueryHookResult = ReturnType<typeof useGetPostsSuspenseQuery>
export type GetPostsQueryResult = Apollo.QueryResult<GetPostsQuery, GetPostsQueryVariables>

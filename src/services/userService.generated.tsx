import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

import * as Types from './types'
const defaultOptions = {} as const

export type GetUserQueryVariables = Types.Exact<{
  userId: Types.Scalars['Int']['input']
}>

export type GetUserQuery = {
  __typename?: 'Query'
  getUser: {
    __typename?: 'User'
    profile: {
      __typename?: 'Profile'
      id: number
      userName?: string | null
      firstName?: string | null
      lastName?: string | null
      createdAt: any
      avatars?: Array<{ __typename?: 'Avatar'; url?: string | null }> | null
    }
  }
}

export type GetPostsByUserQueryVariables = Types.Exact<{
  userId: Types.Scalars['Int']['input']
  endCursorId?: Types.InputMaybe<Types.Scalars['Int']['input']>
}>

export type GetPostsByUserQuery = {
  __typename?: 'Query'
  getPostsByUser: {
    __typename?: 'PostsByUserModel'
    pagesCount: number
    items?: Array<{
      __typename?: 'ImagePost'
      id?: number | null
      createdAt?: any | null
      url?: string | null
    }> | null
  }
}

export type GetPaymentsByUserQueryVariables = Types.Exact<{
  userId: Types.Scalars['Int']['input']
  pageSize?: Types.InputMaybe<Types.Scalars['Int']['input']>
  pageNumber?: Types.InputMaybe<Types.Scalars['Int']['input']>
  sortBy?: Types.InputMaybe<Types.Scalars['String']['input']>
  sortDirection?: Types.InputMaybe<Types.SortDirection>
}>

export type GetPaymentsByUserQuery = {
  __typename?: 'Query'
  getPaymentsByUser: {
    __typename?: 'PaymentPaginationModel'
    pagesCount: number
    page: number
    pageSize: number
    totalCount: number
    items: Array<{
      __typename?: 'SubscriptionByPaymentModel'
      id: string
      dateOfPayment?: any | null
      endDate?: any | null
      price: number
      type: Types.SubscriptionType
      paymentType?: Types.PaymentMethod | null
    }>
  }
}

export type GetFollowersQueryVariables = Types.Exact<{
  userId: Types.Scalars['Int']['input']
  pageSize?: Types.InputMaybe<Types.Scalars['Int']['input']>
  pageNumber?: Types.InputMaybe<Types.Scalars['Int']['input']>
  sortBy?: Types.InputMaybe<Types.Scalars['String']['input']>
  sortDirection?: Types.InputMaybe<Types.SortDirection>
}>

export type GetFollowersQuery = {
  __typename?: 'Query'
  getFollowers: {
    __typename?: 'FollowPaginationModel'
    pagesCount: number
    page: number
    totalCount: number
    pageSize: number
    items: Array<{
      __typename?: 'Follow'
      id: number
      userId: number
      userName?: string | null
      createdAt: any
    }>
  }
}

export const GetUserDocument = gql`
  query GetUser($userId: Int!) {
    getUser(userId: $userId) {
      profile {
        id
        avatars {
          url
        }
        userName
        firstName
        lastName
        createdAt
      }
    }
  }
`

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserQuery(
  baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables> &
    ({ variables: GetUserQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options)
}
export function useGetUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options)
}
export function useGetUserSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetUserQuery, GetUserQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }

  return Apollo.useSuspenseQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options)
}
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>
export type GetUserSuspenseQueryHookResult = ReturnType<typeof useGetUserSuspenseQuery>
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>
export const GetPostsByUserDocument = gql`
  query GetPostsByUser($userId: Int!, $endCursorId: Int) {
    getPostsByUser(userId: $userId, endCursorId: $endCursorId) {
      pagesCount
      items {
        id
        createdAt
        url
      }
    }
  }
`

/**
 * __useGetPostsByUserQuery__
 *
 * To run a query within a React component, call `useGetPostsByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsByUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      endCursorId: // value for 'endCursorId'
 *   },
 * });
 */
export function useGetPostsByUserQuery(
  baseOptions: Apollo.QueryHookOptions<GetPostsByUserQuery, GetPostsByUserQueryVariables> &
    ({ variables: GetPostsByUserQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<GetPostsByUserQuery, GetPostsByUserQueryVariables>(
    GetPostsByUserDocument,
    options
  )
}
export function useGetPostsByUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetPostsByUserQuery, GetPostsByUserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<GetPostsByUserQuery, GetPostsByUserQueryVariables>(
    GetPostsByUserDocument,
    options
  )
}
export function useGetPostsByUserSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetPostsByUserQuery, GetPostsByUserQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }

  return Apollo.useSuspenseQuery<GetPostsByUserQuery, GetPostsByUserQueryVariables>(
    GetPostsByUserDocument,
    options
  )
}
export type GetPostsByUserQueryHookResult = ReturnType<typeof useGetPostsByUserQuery>
export type GetPostsByUserLazyQueryHookResult = ReturnType<typeof useGetPostsByUserLazyQuery>
export type GetPostsByUserSuspenseQueryHookResult = ReturnType<
  typeof useGetPostsByUserSuspenseQuery
>
export type GetPostsByUserQueryResult = Apollo.QueryResult<
  GetPostsByUserQuery,
  GetPostsByUserQueryVariables
>
export const GetPaymentsByUserDocument = gql`
  query GetPaymentsByUser(
    $userId: Int!
    $pageSize: Int
    $pageNumber: Int
    $sortBy: String
    $sortDirection: SortDirection
  ) {
    getPaymentsByUser(
      userId: $userId
      pageSize: $pageSize
      pageNumber: $pageNumber
      sortBy: $sortBy
      sortDirection: $sortDirection
    ) {
      pagesCount
      page
      pageSize
      totalCount
      items {
        id
        dateOfPayment
        endDate
        price
        type
        paymentType
      }
    }
  }
`

/**
 * __useGetPaymentsByUserQuery__
 *
 * To run a query within a React component, call `useGetPaymentsByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaymentsByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaymentsByUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      pageSize: // value for 'pageSize'
 *      pageNumber: // value for 'pageNumber'
 *      sortBy: // value for 'sortBy'
 *      sortDirection: // value for 'sortDirection'
 *   },
 * });
 */
export function useGetPaymentsByUserQuery(
  baseOptions: Apollo.QueryHookOptions<GetPaymentsByUserQuery, GetPaymentsByUserQueryVariables> &
    ({ variables: GetPaymentsByUserQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<GetPaymentsByUserQuery, GetPaymentsByUserQueryVariables>(
    GetPaymentsByUserDocument,
    options
  )
}
export function useGetPaymentsByUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetPaymentsByUserQuery, GetPaymentsByUserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<GetPaymentsByUserQuery, GetPaymentsByUserQueryVariables>(
    GetPaymentsByUserDocument,
    options
  )
}
export function useGetPaymentsByUserSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetPaymentsByUserQuery, GetPaymentsByUserQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }

  return Apollo.useSuspenseQuery<GetPaymentsByUserQuery, GetPaymentsByUserQueryVariables>(
    GetPaymentsByUserDocument,
    options
  )
}
export type GetPaymentsByUserQueryHookResult = ReturnType<typeof useGetPaymentsByUserQuery>
export type GetPaymentsByUserLazyQueryHookResult = ReturnType<typeof useGetPaymentsByUserLazyQuery>
export type GetPaymentsByUserSuspenseQueryHookResult = ReturnType<
  typeof useGetPaymentsByUserSuspenseQuery
>
export type GetPaymentsByUserQueryResult = Apollo.QueryResult<
  GetPaymentsByUserQuery,
  GetPaymentsByUserQueryVariables
>
export const GetFollowersDocument = gql`
  query GetFollowers(
    $userId: Int!
    $pageSize: Int
    $pageNumber: Int
    $sortBy: String
    $sortDirection: SortDirection
  ) {
    getFollowers(
      userId: $userId
      pageNumber: $pageNumber
      pageSize: $pageSize
      sortBy: $sortBy
      sortDirection: $sortDirection
    ) {
      pagesCount
      page
      totalCount
      pageSize
      items {
        id
        userId
        userName
        createdAt
      }
    }
  }
`

/**
 * __useGetFollowersQuery__
 *
 * To run a query within a React component, call `useGetFollowersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFollowersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFollowersQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      pageSize: // value for 'pageSize'
 *      pageNumber: // value for 'pageNumber'
 *      sortBy: // value for 'sortBy'
 *      sortDirection: // value for 'sortDirection'
 *   },
 * });
 */
export function useGetFollowersQuery(
  baseOptions: Apollo.QueryHookOptions<GetFollowersQuery, GetFollowersQueryVariables> &
    ({ variables: GetFollowersQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<GetFollowersQuery, GetFollowersQueryVariables>(
    GetFollowersDocument,
    options
  )
}
export function useGetFollowersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetFollowersQuery, GetFollowersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<GetFollowersQuery, GetFollowersQueryVariables>(
    GetFollowersDocument,
    options
  )
}
export function useGetFollowersSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetFollowersQuery, GetFollowersQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }

  return Apollo.useSuspenseQuery<GetFollowersQuery, GetFollowersQueryVariables>(
    GetFollowersDocument,
    options
  )
}
export type GetFollowersQueryHookResult = ReturnType<typeof useGetFollowersQuery>
export type GetFollowersLazyQueryHookResult = ReturnType<typeof useGetFollowersLazyQuery>
export type GetFollowersSuspenseQueryHookResult = ReturnType<typeof useGetFollowersSuspenseQuery>
export type GetFollowersQueryResult = Apollo.QueryResult<
  GetFollowersQuery,
  GetFollowersQueryVariables
>

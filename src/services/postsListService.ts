import { gql } from '@apollo/client'

export const GET_POSTS = gql(`
  query GetPosts(
    $pageSize: Int,
    $endCursorPostId: Int,
    $sortBy: String,
    $sortDirection: SortDirection,
    $searchTerm: String
  ) {
    getPosts(
      pageSize: $pageSize,
      endCursorPostId: $endCursorPostId,
      sortBy: $sortBy,
      sortDirection: $sortDirection,
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
`)

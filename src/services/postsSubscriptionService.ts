import { gql } from '@apollo/client'

export const POSTS_SUBSCRIPTION = gql(`
  subscription OnPostAdded {
    postAdded {
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
      }
    }
  }
`)

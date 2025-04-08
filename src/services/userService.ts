import { gql } from '@apollo/client'

export const GET_USER = gql(`
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
`)

export const GET_POSTS_BY_USER = gql(`
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
`)

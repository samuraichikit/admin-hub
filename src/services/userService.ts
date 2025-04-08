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

export const GET_PAYMENTS_BY_USER = gql(`
  query GetPaymentsByUser($userId: Int!, $pageSize: Int, $pageNumber: Int, $sortBy: String, $sortDirection: SortDirection) {
    getPaymentsByUser(userId: $userId, pageSize: $pageSize, pageNumber: $pageNumber, sortBy: $sortBy, sortDirection: $sortDirection) {
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
`)

import { gql } from '@apollo/client'

export const GET_PAYMENTS = gql(`
  query GetPayments($pageSize: Int, $pageNumber: Int, $sortBy: String, $sortDirection: SortDirection, $searchTerm: String) {
    getPayments(pageNumber: $pageNumber, pageSize: $pageSize, sortBy: $sortBy, sortDirection: $sortDirection, searchTerm: $searchTerm) {
      pagesCount,
      page,
      pageSize,
      totalCount,
      items {
        id,
        userId,
        userName,
        avatars {
          url
        },
        createdAt,
        amount,
        currency,
        type,
        paymentMethod,
        
      }
    } 
  }
`)

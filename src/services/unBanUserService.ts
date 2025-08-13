import { gql } from '@apollo/client'

export const UN_BLOCKED = gql`
  mutation unbanUser($userId: Int!) {
    unbanUser(userId: $userId)
  }
`

import { gql } from '@apollo/client'

export const UN_BLOCKED = gql`
  mutation unblockUser($userId: Int!) {
    unblockUser(userId: $userId)
  }
`

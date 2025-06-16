import { useState } from 'react'

import { UnBanUserDialog } from '@/app/[locale]/(dashboard)/usersList/[id]/_components/usersList/actionMenu/unBanUser/unBanUserDialog'
import { useUnbanUserMutation } from '@/services/unBanUserService.generated'
import { GET_USERS } from '@/services/usersPaginationService'

type useUnBunUserType = {
  userId: number
  userName: string
}
export const UnBanUsers = ({ userId, userName }: useUnBunUserType) => {
  const [isUnBanDialogOpen, setIsUnBanDialogOpen] = useState(false)
  const [unBanUserMutation] = useUnbanUserMutation({
    refetchQueries: [GET_USERS, 'getUsersList'],
    variables: {
      userId,
    },
  })
  const handleOpenUnBanDialog = () => {
    setIsUnBanDialogOpen(true)
  }
  const handleCloseUnBanDialog = () => {
    setIsUnBanDialogOpen(false)
  }

  const handleUnBanUser = async () => {
    try {
      const res = await unBanUserMutation()

      if (res.data?.unbanUser) {
        alert(`User ${userName} was successfully unBaned`)
      }
    } catch (e) {
      alert(`cant do it`)
    } finally {
      setIsUnBanDialogOpen(false)
    }
  }
  const renderUnBanUserDialog = () => {
    return (
      <UnBanUserDialog
        handleCloseUnBanDialog={handleCloseUnBanDialog}
        handleUnBanUser={handleUnBanUser}
        isUnBanDialogOpen={isUnBanDialogOpen}
        userName={userName}
      />
    )
  }

  return {
    handleOpenUnBanDialog,
    renderUnBanUserDialog,
  }
}

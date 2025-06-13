import { useState } from 'react'

import { useTranslation } from '@/common/hooks/useTranslation'
import { useBanUserMutation } from '@/services/banUserService.generated'
import { GET_USERS } from '@/services/usersPaginationService'
import { Button, Modal, Select, SelectItem } from '@samuraichikit/inc-ui-kit'

import s from './banUserModal.module.scss'

type Props = {
  closeModal: (isShow: boolean) => void
  isShow: boolean
  userId: number
  userName: string
}

export const BanUserModal = ({ userName, userId, closeModal, isShow }: Props) => {
  const [banUser] = useBanUserMutation({
    refetchQueries: [GET_USERS],
  })
  const [isOpened, setIsOpened] = useState<boolean>(isShow)
  const [banReason, setBanReason] = useState<string | undefined>()

  const { t } = useTranslation()

  const handlerBtnYes = async () => {
    if (!banReason) {
      alert('Please select a reason for banning.')

      return
    }
    try {
      const res = await banUser({ variables: { userId, banReason } })

      if (res.errors) {
        throw new Error('Failed to delete user')
      }
      setIsOpened(false)
    } catch (error: any) {
      alert(error.message || 'Error deleting user')
    }
  }

  const handlerBtnNo = () => {
    setIsOpened(false)
    closeModal(false)
  }

  return (
    <Modal
      className={s.modal}
      onOpenChange={handlerBtnNo}
      open={isOpened}
      title={t.banUserModal.titleModal}
    >
      {`${t.banUserModal.question} ${userName}`}
      <Select
        className={s.select}
        placeholder={t.banUserModal.reasonSelect}
        value={banReason}
        onValueChange={setBanReason}
      >
        <SelectItem value={t.banUserModal.badBehavior}>{t.banUserModal.badBehavior}</SelectItem>
        <SelectItem value={t.banUserModal.advertisingPlacement}>
          {t.banUserModal.advertisingPlacement}
        </SelectItem>
        <SelectItem value={t.banUserModal.anotherReason}>{t.banUserModal.anotherReason}</SelectItem>
      </Select>
      <div className={s.yesNo}>
        <Button className={s.buttons} onClick={handlerBtnNo} variant={'outlined'}>
          {t.sideBar.rejectButton}
        </Button>
        <Button className={s.buttons} onClick={handlerBtnYes}>
          {t.sideBar.confirmButton}
        </Button>
      </div>
    </Modal>
  )
}

import { useTranslation } from '@/common/hooks'
import { Button, Modal } from '@samuraichikit/inc-ui-kit'

import s from './unBanUserDialog.module.scss'

type PropsType = {
  handleCloseUnBanDialog: () => void
  handleUnBanUser: () => void
  isUnBanDialogOpen: boolean
  userName: string
}

export const UnBanUserDialog = ({
  handleCloseUnBanDialog,
  handleUnBanUser,
  isUnBanDialogOpen,
  userName,
}: PropsType) => {
  const { t } = useTranslation()

  return (
    <Modal
      className={s.dialog}
      title={t.actionMenuAdmin.titleUnBan}
      open={isUnBanDialogOpen}
      onOpenChange={handleCloseUnBanDialog}
    >
      {`${t.actionMenuAdmin.unBan}${userName}`}
      <div className={s.questionBtn}>
        <Button className={s.button} onClick={handleCloseUnBanDialog}>
          {t.sideBar.rejectButton}
        </Button>
        <Button variant={'outlined'} className={s.button} onClick={handleUnBanUser}>
          {t.sideBar.confirmButton}
        </Button>
      </div>
    </Modal>
  )
}

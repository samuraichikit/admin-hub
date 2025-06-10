import { useEffect, useRef, useState } from 'react'

import { RemoveUserModal } from '@/app/[locale]/(dashboard)/usersList/[id]/_components/usersList/actionMenu/removeUserModal/removeUserModal'
import { useTranslation } from '@/common/hooks/useTranslation'
import { BanIcon, Button, MoreIcon, PersonRemoveIcon, Typography } from '@samuraichikit/inc-ui-kit'
import Link from 'next/link'

import s from './actionMenu.module.scss'

type Props = {
  userId: number
  userName: string
}

export const ActionsMenu = ({ userId, userName }: Props) => {
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false)
  const [isRemoveUserModalOpen, setIsRemoveUserModalOpen] = useState<boolean>(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const { t } = useTranslation()

  const toggleEditModal = () => {
    setEditModalOpen(!editModalOpen)
  }

  const handleDeleteUser = () => {
    setIsRemoveUserModalOpen(true)
    setEditModalOpen(false)
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (editModalOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setEditModalOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [editModalOpen])

  return (
    <div ref={menuRef}>
      <Button className={s.toggle} onClick={toggleEditModal} variant={'icon'}>
        {'...'}
      </Button>
      {editModalOpen && (
        <div className={s.adminModal}>
          <Button className={s.btn} onClick={handleDeleteUser} variant={'icon'}>
            <PersonRemoveIcon />{' '}
            <Typography variant={'regular_text_14'}>{t.actionMenuAdmin.deleteUser}</Typography>
          </Button>
          <Button className={s.btn} variant={'icon'}>
            <BanIcon />{' '}
            <Typography variant={'regular_text_14'}>{t.actionMenuAdmin.banInSystem}</Typography>
          </Button>
          <Button asChild className={s.btn} variant={'icon'}>
            <Link href={`/admin/usersList/${userId}`} target={'_blank'}>
              <MoreIcon />{' '}
              <Typography variant={'regular_text_14'}>
                {t.actionMenuAdmin.moreInformation}
              </Typography>
            </Link>
          </Button>
        </div>
      )}
      {isRemoveUserModalOpen && (
        <RemoveUserModal
          closeModal={isShow => setIsRemoveUserModalOpen(isShow)}
          isShow={isRemoveUserModalOpen}
          userId={userId}
          userName={userName}
        />
      )}
    </div>
  )
}

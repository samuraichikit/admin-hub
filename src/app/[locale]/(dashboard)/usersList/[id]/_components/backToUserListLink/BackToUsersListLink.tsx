'use client'

import { useTranslation } from '@/common/hooks'
import { Typography, ArrowLeftIcon } from '@samuraichikit/inc-ui-kit'
import Link from 'next/link'
import { useParams } from 'next/navigation'

import s from './backToUsersListLink.module.scss'

export const BackToUsersListLink = () => {
  const classNames = {
    container: s.container,
  }

  const { locale } = useParams()
  const { t } = useTranslation()

  return (
    <Link className={classNames.container} href={`/${locale}/usersList`}>
      <ArrowLeftIcon />
      <Typography variant={'medium_text_14'}>{t.userPage.backToUsersList}</Typography>
    </Link>
  )
}

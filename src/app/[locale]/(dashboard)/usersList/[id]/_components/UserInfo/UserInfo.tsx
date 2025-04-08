'use client'

import { useTranslation } from '@/common/hooks'
import { formatDate } from '@/common/utils'
import { useGetUserQuery } from '@/services/userService.generated'
import { DefaultAvatar, Typography } from '@samuraichikit/inc-ui-kit'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

import s from './userInfo.module.scss'

export const UserInfo = () => {
  const classNames = {
    accountInfoContainer: s.accountInfoContainer,
    adminUserInfoContainer: s.adminUserInfoContainer,
    creationDate: s.creationDate,
    creationDateContainer: s.creationDateContainer,
    userDetailsContainer: s.userDetailsContainer,
    userId: s.userId,
    userIdContainer: s.userIdContainer,
    userName: s.userName,
    DefaultAvatar: s.defaultAvatar,
  }
  const { id } = useParams()
  const userId = Number(id)
  const { data } = useGetUserQuery({
    variables: { userId },
  })
  const { t } = useTranslation()

  if (!data?.getUser.profile) {
    return null
  }

  const { avatars, createdAt, firstName, id: userIdData, lastName, userName } = data.getUser.profile
  const src = avatars?.[0]?.url

  return (
    <div className={classNames.adminUserInfoContainer}>
      <div className={classNames.userDetailsContainer}>
        {src ? (
          <Image alt={t.userPage.userAvatar} height={60} src={src} width={60} />
        ) : (
          <DefaultAvatar className={classNames.DefaultAvatar} />
        )}
        <div>
          <Typography asChild variant={'h1'}>
            <h1>
              {firstName} {lastName}
            </h1>
          </Typography>
          <Typography asChild className={classNames.userName} variant={'regular_link'}>
            <Link href={`/profile/${userId}`}>{userName}</Link>
          </Typography>
        </div>
      </div>
      <div className={classNames.accountInfoContainer}>
        <div className={classNames.userIdContainer}>
          <Typography className={classNames.userId}>{t.userPage.userId}</Typography>
          <Typography variant={'regular_text_16'}>{userIdData}</Typography>
        </div>
        <div className={classNames.creationDateContainer}>
          <Typography className={classNames.creationDate}>
            {t.userPage.profileCreationDate}
          </Typography>
          <Typography variant={'regular_text_16'}>{formatDate(createdAt)}</Typography>
        </div>
      </div>
    </div>
  )
}

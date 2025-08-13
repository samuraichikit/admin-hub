import {
  UserInfo,
  BackToUsersListLink,
  AdminUserTabs,
} from '@/app/[locale]/(dashboard)/usersList/[id]/_components'

import s from './userPage.module.scss'

export const UserPage = () => {
  const classNames = {
    container: s.container,
  }

  return (
    <div className={classNames.container}>
      <BackToUsersListLink />
      <UserInfo />
      <AdminUserTabs />
    </div>
  )
}

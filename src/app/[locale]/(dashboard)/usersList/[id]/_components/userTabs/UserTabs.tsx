'use client'

import { QUERY_PARAMS, TABS_CONSTANTS } from '@/common/constants'
import { useQueryParams, useTranslation } from '@/common/hooks'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@samuraichikit/inc-ui-kit'

import s from './userTabs.module.scss'

import { Followers } from '../followers'
import { Following } from '../following'
import { Payments } from '../payments'
import { UserUploadedPhotos } from '../userUploadedPhotos'

export const AdminUserTabs = () => {
  const classNames = {
    container: s.container,
    list: s.list,
    trigger: s.trigger,
  }

  const { resetParams, searchParams, setQueryParams } = useQueryParams()
  const { t } = useTranslation()

  const handleChangeTab = (value: string) => {
    resetParams()
    setQueryParams({ [QUERY_PARAMS.TAB]: value })
  }

  const uploadedPhotos = TABS_CONSTANTS.ADMIN_USER_PAGE.UPLOADED_PHOTOS
  const payments = TABS_CONSTANTS.ADMIN_USER_PAGE.PAYMENTS
  const followers = TABS_CONSTANTS.ADMIN_USER_PAGE.FOLLOWERS
  const following = TABS_CONSTANTS.ADMIN_USER_PAGE.FOLLOWING

  const currentTab = searchParams?.get(QUERY_PARAMS.TAB) ?? uploadedPhotos

  return (
    <Tabs className={classNames.container} onValueChange={handleChangeTab} value={currentTab}>
      <TabsList className={classNames.list}>
        <TabsTrigger className={classNames.trigger} value={uploadedPhotos}>
          {t.userPage.uploadedPhotos}
        </TabsTrigger>
        <TabsTrigger className={classNames.trigger} value={payments}>
          {t.userPage.payments}
        </TabsTrigger>
        <TabsTrigger className={classNames.trigger} value={followers}>
          {t.userPage.followers}
        </TabsTrigger>
        <TabsTrigger className={classNames.trigger} value={following}>
          {t.userPage.following}
        </TabsTrigger>
      </TabsList>
      <TabsContent value={uploadedPhotos}>
        <UserUploadedPhotos />
      </TabsContent>
      <TabsContent value={payments}>
        <Payments />
      </TabsContent>
      <TabsContent value={followers}>
        <Followers />
      </TabsContent>
      <TabsContent value={following}>
        <Following />
      </TabsContent>
    </Tabs>
  )
}

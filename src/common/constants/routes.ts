import { Locales } from '../types'

export const ROUTES = {
  HOME: '/',
  SIGN_IN: (locale: Locales) => `/${locale}/signIn`,
  USERS_LIST: (locale: Locales) => `/${locale}/usersList`,
}

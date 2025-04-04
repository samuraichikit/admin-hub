import { LOCALES } from '../constants'
import { Locales } from '../types'

export const getCurrentLocale = (pathname: string): Locales => {
  const locales = Object.values(LOCALES)
  const localeFromPath = pathname.split('/')[1]
  const preferredLocale = locales.find(locale => navigator.language.startsWith(locale))
  const preferredLocaleOrDefault = preferredLocale ?? LOCALES.EN

  const locale = locales.includes(localeFromPath as Locales)
    ? (localeFromPath as Locales)
    : preferredLocaleOrDefault

  return locale
}

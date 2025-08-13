import { LOCALES } from '../constants'
import { Locales } from '../types'

export const getCurrentLocale = (pathname: string): Locales => {
  const locales = Object.values(LOCALES)
  const localeFromPath = pathname.split('/')[1]
  const preferredLocale =
    typeof navigator !== 'undefined'
      ? locales.find(locale => navigator.language.startsWith(locale))
      : undefined
  const preferredLocaleOrDefault = preferredLocale ?? LOCALES.EN

  const locale = locales.includes(localeFromPath as Locales)
    ? (localeFromPath as Locales)
    : preferredLocaleOrDefault

  return locale
}

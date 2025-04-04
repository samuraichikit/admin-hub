export const getCurrentLocale = (pathname: string) => {
  const preferredLocale = navigator.language.startsWith('ru') ? 'ru' : 'en'
  const localeFromPath = pathname.split('/')[1]
  const locale =
    localeFromPath && ['en', 'ru'].includes(localeFromPath) ? localeFromPath : preferredLocale

  return locale
}

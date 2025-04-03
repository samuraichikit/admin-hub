export const getCurrentLocale = (pathname: string) => {
  const segments = pathname.split('/')
  const locale = segments[1]

  return locale
}

import { usePathname } from 'next/navigation'

import { en } from '../../../locales/en'
import { ru } from '../../../locales/ru'
import { getCurrentLocale } from '../utils'

export const useTranslation = () => {
  const pathname = usePathname()
  const locale = getCurrentLocale(pathname)

  const t = locale === 'en' ? en : ru

  return { t }
}

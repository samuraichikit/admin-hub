import { usePathname } from 'next/navigation'

import { en } from '../../../locales/en'
import { ru } from '../../../locales/ru'

export const useTranslation = () => {
  const pathname = usePathname()
  const segments = pathname.split('/')
  const locale = segments[1]

  const t = locale === 'en' ? en : ru

  return { t }
}

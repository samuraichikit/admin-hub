import { en } from '../../../locales/en'
import { ru } from '../../../locales/ru'

export const useTranslation = () => {
  const locale = 'en'

  const t = locale === 'en' ? en : ru

  return { t }
}

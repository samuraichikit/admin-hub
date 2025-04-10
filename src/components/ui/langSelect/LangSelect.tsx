'use client'

import { ReactNode } from 'react'

import { LOCALES } from '@/common/constants'
import { Locales } from '@/common/types'
import { getCurrentLocale } from '@/common/utils'
import {
  FlagRussia,
  FlagUnitedKingdom,
  Select,
  SelectItem,
  Typography,
} from '@samuraichikit/inc-ui-kit'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import s from './langSelect.module.scss'

type LanguageDetails = {
  language: string
  Flag: ReactNode
}

export const LangSelect = () => {
  const classNames = {
    selectItem: s.selectItem,
  }

  const { replace } = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const currentLocale: Locales = getCurrentLocale(pathname) === LOCALES.RU ? LOCALES.RU : LOCALES.EN

  const languagesDetails: Record<Locales, LanguageDetails> = {
    en: { language: 'English', Flag: <FlagUnitedKingdom /> },
    ru: { language: 'Русский', Flag: <FlagRussia /> },
  }

  const changeLangHandler = (newLocale: Locales) => {
    if (currentLocale === newLocale) {
      return
    }

    const segments = pathname.split('/')

    segments[1] = newLocale
    const newPathname = segments.join('/')
    const newSearchParams = new URLSearchParams(searchParams.toString())

    replace(`${newPathname}?${newSearchParams}`)
  }

  return (
    <Select onValueChange={changeLangHandler} value={currentLocale}>
      {Object.entries(languagesDetails).map(([l, { language, Flag }]) => {
        return (
          <SelectItem key={l} value={l}>
            <div className={classNames.selectItem}>
              {Flag}
              <Typography variant={'regular_text_16'}>{language}</Typography>
            </div>
          </SelectItem>
        )
      })}
    </Select>
  )
}

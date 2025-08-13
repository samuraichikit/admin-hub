import { LOCALES } from '../constants'

export type Locales = (typeof LOCALES)[keyof typeof LOCALES]

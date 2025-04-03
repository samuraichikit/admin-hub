import { z } from 'zod'

import { Locale } from '../../../locales/ru'
import { EMAIL_EXAMPLE } from '../constants'

export const emailSchema = (t: Locale) => {
  return z.string().email({
    message: `${t.schemaErrorMsg.emailFormat} ${EMAIL_EXAMPLE}`,
  })
}

export const signInSchema = (t: Locale) => {
  return z.object({
    email: emailSchema(t),
    password: z.string(),
  })
}

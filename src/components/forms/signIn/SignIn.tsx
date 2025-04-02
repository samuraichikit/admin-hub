import { useForm } from 'react-hook-form'

import { useTranslation } from '@/common/hooks/useTranslation'
import { signInSchema } from '@/common/schemas'
import { FormTextField } from '@/components/formComponents'
import { useLoginAdminMutation } from '@/services/authAdminService.generated'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Card, Typography } from '@samuraichikit/inc-ui-kit'
import { useRouter } from 'next/router'
import { z } from 'zod'

import s from './signIn.module.scss'

type FormValues = z.infer<ReturnType<typeof signInSchema>>

export const SignIn = () => {
  const classNames = {
    card: s.card,
    textFieldPassword: s.textFieldPassword,
    title: s.title,
  }
  const { push } = useRouter()
  const { t } = useTranslation()
  const { control, handleSubmit, setError } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
    resolver: zodResolver(signInSchema(t)),
  })

  const [login] = useLoginAdminMutation()

  const submitHandler = async ({ email, password }: FormValues) => {
    const { data } = await login({ variables: { email, password } })
    const logged = data?.loginAdmin.logged

    if (logged) {
      push('/admin/usersList')
    } else {
      setError('email', { message: ' ' })
      setError('password', {
        message: t.signIn.error,
      })
    }
  }

  return (
    <Card className={classNames.card}>
      <Typography className={classNames.title} variant={'h1'}>
        {t.signIn.signIn}
      </Typography>
      <form onSubmit={handleSubmit(submitHandler)}>
        <FormTextField
          control={control}
          label={t.signIn.email}
          name={'email'}
          placeholder={'Epam@epam.com'}
        />
        <FormTextField
          className={classNames.textFieldPassword}
          control={control}
          label={t.signIn.password}
          name={'password'}
          type={'password'}
        />
        <Button fullWidth>{t.signIn.signIn}</Button>
      </form>
    </Card>
  )
}

'use client'

import { ReactNode, useEffect, useState } from 'react'

import { usePathname, useRouter } from 'next/navigation'

import { ROUTES } from '../constants'
import { getCurrentLocale } from '../utils'

export function AuthProvider({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  const { push } = useRouter()
  const [isAuth, setIsAuth] = useState<boolean | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const authState = localStorage.getItem('isLogged') === 'true'
    const locale = getCurrentLocale(pathname)

    setIsAuth(authState)

    if (pathname === ROUTES.SIGN_IN(locale) && authState) {
      push(ROUTES.USERS_LIST(locale))
    } else if (authState && pathname === ROUTES.HOME) {
      push(ROUTES.USERS_LIST(locale))
    } else if (!authState) {
      push(ROUTES.SIGN_IN(locale))
    }
  }, [push, pathname])

  if (isAuth === null || pathname === ROUTES.HOME) {
    return <div>Loading...</div>
  }

  return <>{children}</>
}

'use client'

import { ReactNode, useEffect, useState } from 'react'

import { usePathname, useRouter } from 'next/navigation'

export function AuthProvider({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  const locale = navigator.language.startsWith('ru') ? 'ru' : 'en'
  const { push } = useRouter()
  const [isAuth, setIsAuth] = useState<boolean | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const authState = localStorage.getItem('isLogged') === 'true'

    setIsAuth(authState)

    const routes = {
      signedIn: `/${locale}/usersList`,
      signIn: `/${locale}/signIn`,
    }

    if (pathname === routes.signIn && authState) {
      push(routes.signedIn)
    } else if (authState && pathname === '/') {
      push(routes.signedIn)
    } else if (!authState) {
      push(routes.signIn)
    }
  }, [locale, push, pathname])

  if (isAuth === null || pathname === '/') {
    return <div>Loading...</div>
  }

  return <>{children}</>
}

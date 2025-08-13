'use client'

import { getCurrentLocale } from '@/common/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import s from './Sidebar.module.scss'

export function Sidebar() {
  const pathname = usePathname()
  const locale = getCurrentLocale(pathname)
  const isActive = (path: string) => {
    return pathname.startsWith(`/${locale}${path}`)
  }

  return (
    <aside className={s.sidebar}>
      <nav>
        <ul>
          <li>
            <Link href={`/${locale}/usersList`} className={isActive('/usersList') ? s.active : ''}>
              Users list
            </Link>
          </li>
          <li>
            <Link
              href={`/${locale}/statistics`}
              className={isActive('/statistics') ? s.active : ''}
            >
              Statistics
            </Link>
          </li>
          <li>
            <Link
              href={`/${locale}/paymentsList`}
              className={isActive('/paymentsList') ? s.active : ''}
            >
              Payments list
            </Link>
          </li>
          <li>
            <Link href={`/${locale}/postsList`} className={isActive('/postsList') ? s.active : ''}>
              Posts list
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

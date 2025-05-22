import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export const useQueryParams = () => {
  const { push } = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const setQueryParams = (params: Record<string, string>, replace = false) => {
    const urlSearchParams = replace
      ? new URLSearchParams()
      : new URLSearchParams(searchParams.toString())

    Object.entries(params).forEach(([key, value]) => {
      if (value === '') {
        urlSearchParams.delete(key)
      } else {
        urlSearchParams.set(key, value)
      }
    })

    push(`${pathname}?${urlSearchParams.toString()}`)
  }

  const removeQueryParams = (keys: string[]) => {
    const urlSearchParams = new URLSearchParams(searchParams.toString())

    keys.forEach(key => urlSearchParams.delete(key))

    push(`${pathname}?${urlSearchParams.toString()}`)
  }

  return {
    searchParams,
    setQueryParams,
    removeQueryParams,
  }
}

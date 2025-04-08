import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export const useQueryParams = () => {
  const { push } = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const setQueryParams = (params: Record<string, string>) => {
    const urlSearchParams = new URLSearchParams(searchParams.toString())

    Object.keys(params).forEach(key => {
      urlSearchParams.set(key, params[key])
    })
    push(`${pathname}?${urlSearchParams.toString()}`)
  }

  const resetParams = () => {
    const urlSearchParams = new URLSearchParams()

    push(`${pathname}?${urlSearchParams.toString()}`)
  }

  return {
    resetParams,
    searchParams,
    setQueryParams,
  }
}

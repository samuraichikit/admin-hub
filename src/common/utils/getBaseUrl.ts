export const getBaseUrl = () => {
  if (process.env.NODE_ENV === 'development') {
    return process.env.NEXT_PUBLIC_LOCAL_URL
  }
  if (process.env.NODE_ENV === 'production') {
    return process.env.NEXT_PUBLIC_PRODUCTION_URL
  }

  return process.env.NEXT_PUBLIC_LOCAL_URL
}

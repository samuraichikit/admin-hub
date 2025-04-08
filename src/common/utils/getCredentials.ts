type Credentials = {
  email: string
  password: string
}

export const getCredentials = ({ email, password }: Credentials) => {
  return Buffer.from(`${email}:${password}`).toString('base64')
}

import { cookies } from 'next/headers'
import decode from 'jwt-decode'

interface User {
  sub: string
  name: string
  avatarUrl: string
}

export default function getUser(): User {
  const token = cookies().get('token')?.value

  if (!token) {
    throw new Error('')
  }

  const user: User = decode(token)

  return user
}

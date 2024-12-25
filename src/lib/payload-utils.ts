import { User, Vendor } from "../../payload-types"
import { cookies } from 'next/headers'

export const getServerSideUser = async () => {
  try {
    const token = (await cookies()).get("payload-token")?.value
    console.log('Found token:', token)

    if (!token) {
      console.log('No token found in cookies')
      return null
    }

    const meRes = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/me`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
      credentials: 'include',
    })

    console.log('ME response status:', meRes.status)

    if (!meRes.ok) {
      console.log('ME request failed:', await meRes.text())
      return null
    }

    const data = await meRes.json()
    console.log('ME response data:', data)

    return data.user
  } catch (err) {
    console.error('getServerSideUser error:', err)
    return null
  }
}



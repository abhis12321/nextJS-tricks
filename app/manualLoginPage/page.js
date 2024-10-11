import React from 'react'
import ManualLoginPageContainer from '../__components/ManualLoginPageContainer'
import { cookies } from 'next/headers'
import { AUTH_COOKIE } from '@/constants'

export default async function page() {
    const tocken = cookies().get(AUTH_COOKIE)?.value;
  return (
    <div>
      <ManualLoginPageContainer tocken={tocken}/>
    </div>
  )
}

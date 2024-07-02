import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

import { getCurrentUser } from '@/lib/authjs-payload-adapter/payload'
import DefaultFooter from '@/payload/blocks/Footer/DefaultFooter'
import DefaultHeader from '@/payload/blocks/Header/DefaultHeader'
import SignInSideBar from '@/payload/blocks/Header/SignInSideBar'
import SignUpSideBar from '@/payload/blocks/Header/SignUpSideBar'

export const revalidate = 60000

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const payload = await getPayloadHMR({ config: configPromise })
  const initData = await payload.findGlobal({
    slug: 'site-settings',
    draft: false,
  })
  const user = await getCurrentUser()

  return (
    <div className='flex min-h-screen flex-col'>
      {/* Navbar */}
      <DefaultHeader singleMenu={true} dark />
      <SignInSideBar />
      <SignUpSideBar />
      <div className='flex-grow'>{children}</div>
      <DefaultFooter dark={true} />
      {/* Footer */}
    </div>
  )
}

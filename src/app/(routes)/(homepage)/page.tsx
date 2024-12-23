import AskRecordChatBtn from '@/components/ask-record-chat'
import LandingPage2 from '@/components/landing-page/design2'
import ScrollProgress from '@/components/ui/scroll-progress'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import React from 'react'

import dynamic from 'next/dynamic'

const ServerComponent1 = dynamic(
  () => import('../../../components/landing-page/design2')
)
const ServerComponent2 = dynamic(
  () => import('../../../components/ui/scroll-progress')
)

const page = () => {
  return (
    <>
      <ScrollProgress className="top-0" />

      <ServerComponent1 />
    </>
  )
}

export default page

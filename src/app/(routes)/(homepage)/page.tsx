import AskRecordChatBtn from '@/components/ask-record-chat'
import LandingPage2 from '@/components/landing-page/design2'
import ScrollProgress from '@/components/ui/scroll-progress'
import { HydrationOverlay } from '@builder.io/react-hydration-overlay'
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
      {/* <nav className="flex justify-between items-center p-4 bg-gray-100  sticky top-0 z-10">
        <div className="font-mono font-bold text-xl text-black">Voice Pad</div>
        <div className="text-zinc-600">Search Anything...</div>
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
      <AskRecordChatBtn /> */}

      <ScrollProgress className="top-0" />

      {/* <LandingPage2 /> */}

      <ServerComponent1 />
    </>
  )
}

export default page

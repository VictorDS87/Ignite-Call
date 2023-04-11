// eslint-disable-next-line @typescript-eslint/camelcase
import { globalStyles } from '@/styles/global'
import { SessionProvider } from 'next-auth/react'
import '../lib/dayjs'

import type { AppProps } from 'next/app'

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
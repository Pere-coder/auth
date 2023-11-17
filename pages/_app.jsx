import { SessionProvider } from "next-auth/react"
import Componen from '../components/login-btn'
import "../styles/globals.css"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
       <Componen/>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
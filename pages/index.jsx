import Image from 'next/image'
import Component  from '../components/login-btn'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Component/>
      <h1>Home page</h1>
    </main>
  )
}

import Image from 'next/image'
import { Inter } from 'next/font/google'
import Authenticate from '@/components/authenticate'
import { MyProfile } from '@/components/activeprofile'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='h-screen w-full'>
      <h1 className="text-4xl font-bold text-center">Hello World</h1>
      <Authenticate />
      <MyProfile />
    </div>
  )
}

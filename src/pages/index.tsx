import Image from 'next/image'
import { Inter } from 'next/font/google'
import Authenticate from '@/components/authenticate'
import { MyProfile } from '@/components/activeprofile'
import "@uploadthing/react/styles.css";
import { UploadButton,UploadDropzone } from "@uploadthing/react";

 
import type { OurFileRouter } from "@/server/uploadthing";
import { Composer } from '@/components/composer';
import { useActiveProfile } from '@lens-protocol/react-web';
import Post from '@/components/post';
import Postweb from '@/components/post';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const { data: profile, error, loading } = useActiveProfile();


  return (
    <div className='h-screen w-full'>
      <h1 className="text-4xl font-bold text-center">Hello World</h1>
      <Authenticate />
      
      <Postweb />
    </div>
  )
}

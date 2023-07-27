import Image from 'next/image'
import { Inter } from 'next/font/google'

import Header from '../components/Header/index'
import BottomHeader from '@/components/Header/BottomHeader';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
    className=''
    >
      <Header />
      <BottomHeader />
      <div className="py-10 bg-gray-300"></div>
    </main>
  )
}

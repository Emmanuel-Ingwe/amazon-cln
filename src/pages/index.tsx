import Image from 'next/image'
import { Inter } from 'next/font/google'
import Banner from "@/components/Banner"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className="max-w-screen-2xl mx-auto">
        <Banner />
      </div>
    </main>
  )
}

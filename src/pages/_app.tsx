import '@/styles/globals.css'
import RootLayout from "@/components/RootLayout"
import type { AppProps } from 'next/app'
import "react-responsive-carousel/lib/styles/carousel.min.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="font-bodyfont bg-gray-300">
      <RootLayout>
         <Component {...pageProps} />
      </RootLayout>
    </div>
  )
}

import React from 'react'
import { SiMediamarkt } from "react-icons/si";

type Props = {}

const index = (props: Props) => {
  return (
    <div className='flex flex-col gap-4'>
      <div className="flex gap-2">
        <span className="bg-green-600 rounded-full p-1 h-6 w-6 text-sm text-white flex items-center justify-center mt-1">
          <SiMediamarkt />
        </span>
        <p className="text-sm">
          Your order qualifies for FREE Shipping bt choosing this option at checkout. see datails....
        </p>
      </div>
    </div>
  )
}

export default index
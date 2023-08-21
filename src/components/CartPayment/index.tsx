import React, { useState } from 'react'
import { SiMediamarkt } from "react-icons/si";
import FormattedPrice from "../FormattedPrice"
import StateProps from "../../../type"
import { useDispatch, useSelector } from 'react-redux';

type Props = {}

const index = (props: Props) => {
  const { productData } = useSelector((state: StateProps) => state.next)
  const [ totalAmount, setTotalAmount ] = useState(0)

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
      <p className="flex items-center justify-between px-2 font-semibold">
        Total:{" "}
        <span className="">
          <FormattedPrice amount={totalAmount} />
        </span>
      </p>
    </div>
  )
}

export default index
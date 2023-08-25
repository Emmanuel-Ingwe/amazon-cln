import React, { useEffect, useState } from 'react'
import { SiMediamarkt } from "react-icons/si";
import FormattedPrice from "../FormattedPrice"
import {StateProps, StoreProduct } from "../../../type"
import { useDispatch, useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';

type Props = {}

const index = (props: Props) => {
    const {productData, favouriteData, userInfo} = useSelector((state: StateProps) => state.next)
  const [ totalAmount, setTotalAmount ] = useState(0)
  useEffect(() => {
    let amt=0
    productData.map((item: StoreProduct) => {
      amt += item.price * item.quantity
      return
    })
    setTotalAmount(amt)
  }, [productData])

  //stripe
  const handleCheckout = async () => {
    // const stripe = await stripePromise;
  }



  return (
    <div className='flex flex-col gap-4'>
      <div className="flex gap-2">
        <span className="bg-green-600 rounded-full p-1 h-6 w-6 text-sm text-white flex items-center justify-center mt-1">
          <SiMediamarkt />
        </span>
        <p className="text-sm">
          Your order qualifies for FREE Shipping but choosing this option at checkout. see datails....
        </p>
      </div>
      <p className="flex items-center justify-between px-2 font-semibold">
        Total:{" "}
        <span className="">
          <FormattedPrice amount={totalAmount} />
        </span>
      </p>
        {
          userInfo? (
            <div className="">
                <button onClick={handleCheckout} className="w-full h-10 text-sm font-semibold bg-amazon_blue bg-opacity-50 text-white rounded-lg hover:bg-amazon_yellow hover:text-black duration-300 mt-2">
                  Proceed to buy
                </button>
            </div>
          ) : (
            <div className="">
                <button className="w-full h-10 text-sm font-semibold bg-amazon_blue bg-opacity-50 text-white rounded-lg cursor-not-allowed">
                  Proceed to buy
                </button>
                    <p className="text-xs mt-1 text-red-500 font-semibold animate-bounce">Please login to continue</p>
            </div>
          )
        }
    </div>
  )
}

export default index
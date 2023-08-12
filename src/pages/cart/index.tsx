import React from 'react'
import { StateProps, StoreProduct } from '../../../type';
import { useSelector } from "react-redux";
// import CartProduct from "@/components/CartProduct";
// import ResetCart from "@/components/ResetCart";
// import Link from "next/link";
// import CartPayment from "@/components/CartPayment";

type Props = {}

const cart = (props: Props) => {
  const { productData } = useSelector((state: StateProps) => state.next);

  return (
    <div className='max-w-screen-2xl mx-auto px-6 grid grid-cols-5 gap-10 py-4'>
      {
        productData.length > 0 ?(
          <div>

          </div>
        ) : (
          <div className="">
            <h1 className="">Your cart is empty</h1>
            <button>go to shopping</button>
          </div>
        )
      }
    </div>
  )
}

export default cart
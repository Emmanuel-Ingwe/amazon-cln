import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '../../images/logo.png'
import { BiCaretDown } from "react-icons/bi";
import { HiOutlineSearch } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";
import Link from "next/link";
import cartIcon from '../../images/cartIcon.png'
import { useSelector, useDispatch } from "react-redux";
import { StateProps, StoreProduct } from "../../../type";
import { useSession, signIn, signOut } from "next-auth/react";
import { addUser } from "@/store/nextSlice";
// import SearchProducts from "../SearchProducts";

type Props = {}
 
const index = (props: Props) => {
    const { data: session } = useSession()
    const {productData, favouriteData, userInfo} = useSelector((state: StateProps) => state.next)

    const dispatch = useDispatch();
//   useEffect(() => {
//     setAllData(allProducts.allProducts);
//   }, [allProducts]);
  useEffect(() => {
    if (session) {
      dispatch(
        addUser({
          name: session?.user?.name,
          email: session?.user?.email,
          image: session?.user?.image,
        })
      );
    }
  }, [session]);

  return (
    <div className='w-full h-20 bg-amazon_blue text-lightText sticky top-0 z-50'>
        <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4">

            <Link href="/" className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%]">
                <Image className='w-28 object-cover' src={logo} alt='logoimg' />
            </Link>

            <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 items-center justify-center h-[70%] hidden xl:inline-flex gap-1">
                <SlLocationPin />
                <div className="text-xs">
                    <p className="">Deliver to</p>
                    <p className="text-white font-bold uppercase">USA</p>
                </div>
            </div>

            <div  className="flex-1 h-10 hidden md:inline-flex items-center justify-between relative">
                <input onChange={''}
                    value={''}
                    className="w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none focus-visible:border-amazon_yellow" />

                <span className="w-12 h-full bg-amazon_yellow text-black text-2xl flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md">
                    <HiOutlineSearch />
                </span>
            </div>

            {
             userInfo? ( 
             <div onClick={() => signIn()} className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white hover:rounded-lg cursor-pointer duration-300 h-[86%]">
                    <img src={userInfo.image} alt="userImg" className='w-8 h-8 rounded-full object-cover' />
                <div className="text-xs text-gray-100 flex flex-col justify-between">
                    <p className="text-white font-bold">{userInfo.name}</p>
                    <p className="">{userInfo.email}</p>
                </div>
            </div>

            ) : (
                <div
                        onClick={() => signIn()} className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%]">
                    <p className="text-white font-bold flex items-center">Hello, sign in</p>
                    <p className="">
                        Account & Lists{" "}
                        <span><BiCaretDown /></span>
                    </p>
                </div> )
            }

            <div className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%]">
                <p className="">Marked</p>
                <p className="text-white font-bold">& Favourite</p>
                {favouriteData > 0 && <span className='absolute right-2 top-2 w-4 h-4 border-[1px] border-gray-400 flex items-center justify-center text-xs text-amazon_yellow'>{favouriteData.length}</span>}
            </div>
            
            <Link href={'/cart'} className="flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative">
                <Image
                    className="w-auto object-cover h-8"
                    src={cartIcon}
                    alt="cartImg" 
                 />
                 <p className="text-xs text-white font-bold mt-3">Cart</p>
                 <span className="absolute text-amazon_yellow text-xs top-2 left-[29px] font-semibold">
                    {productData ? productData.length : 0}
                 </span>
            </Link>

        </div>
    </div>
  )
}

export default index
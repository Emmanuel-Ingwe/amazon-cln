import React from 'react'
import Image from 'next/image'
import logo from '../../images/logo.png'
import { BiCaretDown } from "react-icons/bi";
import { HiOutlineSearch } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";
import Link from "next/link";
// import { useSelector, useDispatch } from "react-redux";
// import { StateProps, StoreProduct } from "../../../type";
// import { useSession, signIn, signOut } from "next-auth/react";
// import { useEffect, useState } from "react";
// import { addUser } from "@/store/nextSlice";
// import SearchProducts from "../SearchProducts";

type Props = {}

const index = (props: Props) => {
  return (
    <div className='w-full h-20 bg-amazon_blue text-lightText sticky top-0 z-50'>
        <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4">

            <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%]">
                <Image className='w-28 object-cover' src={logo} alt='logoimg' />
            </div>

            <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 items-center justify-center h-[70%] hidden xl:inline-flex">
                <SlLocationPin />
                <div className="text-xs">
                    <p className="">Deliver to</p>
                    <p className="text-white font-bold uppercase">USA</p>
                </div>
            </div>

            <div className="flex-1 h-10 hidden md:inline-flex items-center">
                <input type="text" placeholder='search next amazonn product' />
            </div>


        </div>
    </div>
  )
}

export default index
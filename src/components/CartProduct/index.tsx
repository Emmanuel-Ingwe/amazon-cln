import Image from "next/image";
import React from "react";
// import FormattedPrice from "./FormattedPrice";
import { LuMinus, LuPlus } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
} from "@/store/nextSlice";
interface Item {
  brand: string;
  category: string;
  description: string;
  image: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  title: string;
  _id: number;
  quantity: number;
}
interface cartProductsProps {
  item: Item;
}

const index = ({ item }: cartProductsProps) => {
    const dispatch = useDispatch();

    return (
    <div className="bg-gray-100 rounded-lg flex items-center gap-4">
        <Image className="object-cover" width={150} height={150} src={item.image} alt="productImage" />
        <div className="flex items-center px-2 gap-4">
            <div className="div">
                <p className="text-lg font-semibold text-amazon_blue">{item.title}</p>
                <p className="text-sm text-gray-600">{item.description}</p>
                <p>Unit Price <span><FormattedPrice /></span></p>
            </div>
        </div>
    </div>
  )
}

export default index
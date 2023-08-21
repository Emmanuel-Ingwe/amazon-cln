import { LuMenu } from "react-icons/lu";
import { useSelector, useDispatch } from "react-redux";
import { StateProps, StoreProduct } from "../../../type";
import { removeUser } from "@/store/nextSlice";
import { signOut } from "next-auth/react";


type Props = {}

const BottomHeader = (props: Props) => {
    const dispatch = useDispatch();
    const {userInfo} = useSelector((state: StateProps) => state.next)

    const handleSignOut = () => {
        signOut()
        dispatch(removeUser())
    }

  return (
    <div className='w-full h-10 bg-amazon_light text-sm text-white px-4 flex items-center'>
        <p className="flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
            <LuMenu className="text-xl" /> All
        </p>
        <p className="hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
            Today's Deals
        </p>
        <p className="hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
            Customer Service
        </p>
         <p className="hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
            Registry
        </p>
         <p className="hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
            Gift Cards
        </p>
         <p className="hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
            
        </p>
         <p className="hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
            Sell
        </p>
        { userInfo && (
            <p onClick={handleSignOut} className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-red-600 text-amazon_yellow hover:text-red-400 cursor-pointer duration-300">
            Sign Out
        </p>
        ) }
    </div>
  )
}

export default BottomHeader
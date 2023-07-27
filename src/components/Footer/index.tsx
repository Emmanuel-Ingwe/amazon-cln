import Image from "next/image"
import logo from "../../images/logo.png"


type Props = {}

const index = (props: Props) => {
  return (
    <div className="w-full h-20 bg-amazon_light text-gray-300 flex items-center justify-center gap-4">
        <Image src={logo} alt="logo" className="w-24" />
        <p className="">All rights reserved <a className="hover:text-white hover:underline decoration-[1px] cursor-pointer duration-300" href="/" target="_blank">@Ei.com</a></p>
    </div>
  )
}

export default index
import Image from "next/image"
import logo from "../../images/logo.png"


type Props = {}

const index = (props: Props) => {
  return (
    <div>
        <Image src={logo} alt="logo" className="w-24" />
    </div>
  )
}

export default index
import { Carousel } from "react-responsive-carousel"
import sliderImg_1 from "../../images/sliderImg_1.jpg"
import sliderImg_2 from "../../images/sliderImg_2.jpg"
import sliderImg_3 from "../../images/sliderImg_3.jpg"
import Image from "next/image"

type Props = {}

const index = (props: Props) => {
  return (
    <div className="">
        <Carousel>
    <div>
        <Image src={sliderImg_1} alt="slider1" />
    </div>
    <div>
        <Image src={sliderImg_2} alt="" />
    </div>
    <div>
        <Image src={sliderImg_3}alt="" />
    </div>
    </Carousel>
    </div>
  )
}

export default index
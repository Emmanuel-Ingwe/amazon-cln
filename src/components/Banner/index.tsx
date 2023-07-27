import { Carousel } from "react-responsive-carousel"
import sliderImg_1 from "../../images/slider/sliderImg_1.jpg"
import sliderImg_2 from "../../images/slider/sliderImg_2.jpg"
import sliderImg_3 from "../../images/slider/sliderImg_3.jpg"
import Image from "next/image"

type Props = {}

const index = (props: Props) => {
  return (
    <div className="relative">
        <Carousel className="relative" autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={3001}>
    <div>
        <Image priority src={sliderImg_1} alt="slider1" />
    </div>
    <div>
        <Image src={sliderImg_2} alt="" />
    </div>
    <div>
        <Image src={sliderImg_3}alt="" />
    </div>
    </Carousel>
    <div className="w-full h-40 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 z-20"></div>
    </div>
  )
}

export default index
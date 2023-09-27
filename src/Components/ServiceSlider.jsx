// icons
import {
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight
} from "react-icons/rx";
import {
  PiRobotFill
} from "react-icons/pi";




// data
const serviceData = [
  
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'I design incredible and innovative web pages.',
  },
  {
    icon: <RxDesktop />,
    title: 'Front-End',
    description: 'Achieve amazing and dynamic websites.',
  },
  {
    icon: <RxReader />,
    title: 'Back-end',
    description: 'Design a back-end that fits your needs.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Position your website with SEO.',
  },
  {
    icon: <PiRobotFill/>,
    title: 'IA',
    description: 'Interact with AI to achieve  results.',
  },
];

import {Swiper,SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import {  Pagination } from 'swiper/modules';



const ServiceSlider = () => {
  return (

    <Swiper breakpoints={{
      320:{
        slidesPerView:1,
        spaceBetween:15
      },
      640:{
        slidesPerView:3,
        spaceBetween:15
      },
      
    }}
    
    pagination={{
      clickable:true
    }}
    modules={[Pagination]}
    className="h-[240px] sm:h-[340px]"
    >{
      serviceData.map((item,index)=>{
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8
            flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer 
            hover:bg-[rgba(89,65,169,0.15)] transition-all duratuion-300 ">
              {/*Icons  */}
              <div className="text-4xl text-accent mb-4"> {item.icon}</div>
              {/* tittle */}
              <div className="mb-8">
                <div className="mb-2 text-lg">
                  {item.title}
                </div>
                <p className="max-w-[350px] leading-normal">{item.description}</p>
              </div>  
              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"/>
              </div>


            </div>
          </SwiperSlide>
        )
      })
    }</Swiper>
    )
};

export default ServiceSlider;

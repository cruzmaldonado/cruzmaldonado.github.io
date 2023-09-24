import {Swiper,SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import {  Pagination } from 'swiper/modules';

import {
BsArrowRight
  
} from 'react-icons/bs'
import { Link } from "react-router-dom";


export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'https://glistening-hamster-d523f1.netlify.app/',
          number:1,
        },
        {
          title: 'https://grand-starburst-57dd90.netlify.app/',
          number: 2,
        },
        {
          title: 'https://jocular-bunny-1b96c3.netlify.app/',
          number: 3,
        },
        {
          title: 'https://ciudad-caribia.netlify.app/',
          number: 4,
        },
      ],
    },
    {
      images: [
        {
          title: 'https://ciudad-caribia.netlify.app/',
          number: 5,
        },
        {
          title: 'https://symphonious-daffodil-7ceace.netlify.app/',
          number: 6,
        },
        {
          title: 'https://zesty-paprenjak-d18218.netlify.app/',
          number: 7,
        },
        {
          title: 'https://glistening-hamster-d523f1.netlify.app/',
          number:1,
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (

    <Swiper   
    spaceBetween={10}
    
    pagination={{
      clickable:true
    }}
    
    modules={[Pagination]}
    className="h-[415px] "
    >{
      workSlider.slides.map((slice,index)=>{
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 lg:mx-20 cursor-pointer ">
              {slice.images.map((image,index)=>{
                return (
                  <Link to={`${image.title}`} target="_blank" rel="noopener noreferrer"
        
       >
         <div className="relative rounded-lg overflow-hidden
                  flex items-center justify-center group m-0" key={index}>
                    <div className="flex items-center justify-center
                    relative overflow-hidden group">
                      {/* image */}
                      {/* src\images\bulb.png */}

                      <div  className={`bg-Mockup${image.number} bg-cover`}  style={{width:300, height:180}}  />
                      <div className="absolute inset-0 bg-gradient-to-l 
                      from-transparent via-[#e838cc] to-[#4a22bd] 
                      opacity-0 group-hover:opacity-80 transition-all duration-700">
                            {/* tittle */}
                            <div className=" px-2 absolute bottom-0 translate-y-full
                            group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300
                            ">
                              <div className="flex items-center mx-4 gap-x-2 text-[13px] tracking-[0.2em]"
                              >
                                {/* tittle part 1 */}
                                <div className="delay-100">Live</div>
                                {/* tittle part 1 */}
                                <div className="translate-y-[500%] group-hover:translate-y-0
                                transition-all duration-500 delay-150">PROJECT</div>
                                {/* icon */}
                                <div className="text-xl tranlate-y-[500%] group-hover:translate-y-0 transition-all
                                duration-300 delay-200"><BsArrowRight/></div>
                              </div>
                            </div>
                      </div>
                    </div>
                  </div>
       </Link>
                  
                  
                ) 
              })}
            </div>
            
            


          </SwiperSlide>
          
        )
      })
    }</Swiper>
    )
};

export default WorkSlider;

// icons
import {
  RxReader,
  RxArrowTopRight,
  RxChatBubble,
  RxCookie
} from "react-icons/rx";


// data
const serviceData = [
  {
    icon: <RxCookie />,
    title: 'RECIPES-API',
    description: 'Proyecto de recetas: Añade recetas, Filtralas y usa la documentación tipo swagger.',
    link:"https://github.com/cruzmaldonado/recetario_back-end"
    
  },
  {
    icon: <RxReader/>,
    title: 'BLOG-API',
    description: 'Autenticación de usuario tipo token JWT, peticiones protegidas y paginación de los post .',
    link:"https://github.com/cruzmaldonado/blog-express"
  },
  {
    icon: <RxChatBubble />,
    title: 'CHAT-API',
    description: 'Chat donde se puede crear y filtrar conversaciones y también se crearon rutas protegidas para admin .',
    link:"https://github.com/cruzmaldonado/chat-express"
  }
  
  
];

import {Swiper,SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import {  Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";



const WorkBackSlider = () => {
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
    freeMode={true}
    pagination={{
      clickable:true
    }}
    modules={[Pagination]}
    className="h-[240px] sm:h-[340px]"
    >{
      serviceData.map((item,index)=>{
        return (

          <SwiperSlide key={item.link}>
          <Link to={item.link} target="_blank" rel="noopener noreferrer"
          
        >
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
        </Link>
          </SwiperSlide>
          
          
        )
      })
    }</Swiper>
    )
};

export default WorkBackSlider;
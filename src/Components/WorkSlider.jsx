import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";


import {Pagination } from "swiper/modules";

import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[240px] lg:h-[415px] "
    >
      <SwiperSlide>
        <div className="grid grid-cols-2 grid-rows-2 mx-5  gap-4 lg:mx-20 cursor-pointer ">
          <Link
            to="https://react-ecommerce-tailwind.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="relative rounded-lg overflow-hidden
                  flex items-center justify-center group m-0"
            >
              <div
                className="flex items-center justify-center
                    relative overflow-hidden group"
              >
                <div className="bg-Mockup1 bg-cover w-32 h-24 lg:w-300  lg:h-180" />
                <div
                  className="absolute inset-0 bg-gradient-to-l 
                      from-transparent via-[#e838cc] to-[#4a22bd] 
                      opacity-0 group-hover:opacity-80 transition-all duration-700"
                >
                  {/* tittle */}
                  <div
                    className=" px-2 absolute bottom-0 translate-y-full
                            group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300
                            "
                  >
                    <div className="flex items-center mx-4 gap-x-2 text-[13px] tracking-[0.2em]">
                      {/* tittle part 1 */}
                      <div className="delay-100">Live</div>
                      {/* tittle part 1 */}
                      <div
                        className="translate-y-[500%] group-hover:translate-y-0
                                transition-all duration-500 delay-150 hidden lg:flex"
                      >
                        PROJECT 
                      </div>
                      {/* icon */}
                      <div
                        className="text-xl tranlate-y-[500%] group-hover:translate-y-0 transition-all
                                duration-300 delay-200"
                      >
                        <BsArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link
            to="https://grand-starburst-57dd90.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="relative rounded-lg overflow-hidden
                  flex items-center justify-center group m-0"
            >
              <div
                className="flex items-center justify-center
                    relative overflow-hidden group"
              >
                <div className="bg-Mockup2 bg-cover w-32 h-24 lg:w-300  lg:h-180" />
                <div
                  className="absolute inset-0 bg-gradient-to-l 
                      from-transparent via-[#e838cc] to-[#4a22bd] 
                      opacity-0 group-hover:opacity-80 transition-all duration-700"
                >
                  {/* tittle */}
                  <div
                    className=" px-2 absolute bottom-0 translate-y-full
                            group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300
                            "
                  >
                    <div className="flex items-center mx-4 gap-x-2 text-[13px] tracking-[0.2em]">
                      {/* tittle part 1 */}
                      <div className="delay-100">Live</div>
                      {/* tittle part 1 */}
                      <div
                        className="translate-y-[500%] group-hover:translate-y-0
                                transition-all duration-500 delay-150 hidden lg:flex "
                      >
                        PROJECT 2
                      </div>
                      {/* icon */}
                      <div
                        className="text-xl tranlate-y-[500%] group-hover:translate-y-0 transition-all
                                duration-300 delay-200"
                      >
                        <BsArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link
            to="https://jocular-bunny-1b96c3.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="relative rounded-lg overflow-hidden
                  flex items-center justify-center group m-0"
            >
              <div
                className="flex items-center justify-center
                    relative overflow-hidden group"
              >
                <div className="bg-Mockup3 bg-cover w-32 h-24 lg:w-300  lg:h-180" />
                <div
                  className="absolute inset-0 bg-gradient-to-l 
                      from-transparent via-[#e838cc] to-[#4a22bd] 
                      opacity-0 group-hover:opacity-80 transition-all duration-700"
                >
                  {/* tittle */}
                  <div
                    className=" px-2 absolute bottom-0 translate-y-full
                            group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300
                            "
                  >
                    <div className="flex items-center mx-4 gap-x-2 text-[13px] tracking-[0.2em]">
                      {/* tittle part 1 */}
                      <div className="delay-100">Live</div>
                      {/* tittle part 1 */}
                      <div
                        className="translate-y-[500%] group-hover:translate-y-0
                                transition-all duration-500 delay-150 hidden lg:flex"
                      >
                        PROJECT
                      </div>
                      {/* icon */}
                      <div
                        className="text-xl tranlate-y-[500%] group-hover:translate-y-0 transition-all
                                duration-300 delay-200"
                      >
                        <BsArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link
            to="https://ciudad-caribia.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="relative rounded-lg overflow-hidden
                  flex items-center justify-center group m-0"
            >
              <div
                className="flex items-center justify-center
                    relative overflow-hidden group"
              >
                <div className="bg-Mockup4 bg-cover w-32 h-24 lg:w-300  lg:h-180" />
                <div
                  className="absolute inset-0 bg-gradient-to-l 
                      from-transparent via-[#e838cc] to-[#4a22bd] 
                      opacity-0 group-hover:opacity-80 transition-all duration-700"
                >
                  {/* tittle */}
                  <div
                    className=" px-2 absolute bottom-0 translate-y-full
                            group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300
                            "
                  >
                    <div className="flex items-center mx-4 gap-x-2 text-[13px] tracking-[0.2em]">
                      {/* tittle part 1 */}
                      <div className="delay-100">Live</div>
                      {/* tittle part 1 */}
                      <div
                        className="translate-y-[500%] group-hover:translate-y-0
                                transition-all duration-500 delay-150 hidden lg:flex"
                      >
                        PROJECT 
                      </div>
                      {/* icon */}
                      <div
                        className="text-xl tranlate-y-[500%] group-hover:translate-y-0 transition-all
                                duration-300 delay-200"
                      >
                        <BsArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="grid grid-cols-2 grid-rows-2 mx-5  gap-4 lg:mx-20 cursor-pointer ">
          <Link
            to="https://statuesque-dodol-35d60c.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="relative rounded-lg overflow-hidden
                  flex items-center justify-center group m-0"
            >
              <div
                className="flex items-center justify-center
                    relative overflow-hidden group"
              >
                <div className="bg-Mockup5 bg-cover w-32 h-24 lg:w-300  lg:h-180" />
                <div
                  className="absolute inset-0 bg-gradient-to-l 
                      from-transparent via-[#e838cc] to-[#4a22bd] 
                      opacity-0 group-hover:opacity-80 transition-all duration-700"
                >
                  {/* tittle */}
                  <div
                    className=" px-2 absolute bottom-0 translate-y-full
                            group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300
                            "
                  >
                    <div className="flex items-center mx-4 gap-x-2 text-[13px] tracking-[0.2em]">
                      {/* tittle part 1 */}
                      <div className="delay-100">Live</div>
                      {/* tittle part 1 */}
                      <div
                        className="translate-y-[500%] group-hover:translate-y-0
                                transition-all duration-500 delay-150 hidden lg:flex"
                      >
                        PROJECT 
                      </div>
                      {/* icon */}
                      <div
                        className="text-xl tranlate-y-[500%] group-hover:translate-y-0 transition-all
                                duration-300 delay-200"
                      >
                        <BsArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link
            to="https://symphonious-daffodil-7ceace.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="relative rounded-lg overflow-hidden
                  flex items-center justify-center group m-0"
            >
              <div
                className="flex items-center justify-center
                    relative overflow-hidden group"
              >
                <div className="bg-Mockup6 bg-cover w-32 h-24 lg:w-300  lg:h-180" />
                <div
                  className="absolute inset-0 bg-gradient-to-l 
                      from-transparent via-[#e838cc] to-[#4a22bd] 
                      opacity-0 group-hover:opacity-80 transition-all duration-700"
                >
                  {/* tittle */}
                  <div
                    className=" px-2 absolute bottom-0 translate-y-full
                            group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300
                            "
                  >
                    <div className="flex items-center mx-4 gap-x-2 text-[13px] tracking-[0.2em]">
                      {/* tittle part 1 */}
                      <div className="delay-100">Live</div>
                      {/* tittle part 1 */}
                      <div
                        className="translate-y-[500%] group-hover:translate-y-0
                                transition-all duration-500 delay-150 hidden lg:flex"
                      >
                        PROJECT
                      </div>
                      {/* icon */}
                      <div
                        className="text-xl tranlate-y-[500%] group-hover:translate-y-0 transition-all
                                duration-300 delay-200"
                      >
                        <BsArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link
            to="https://zesty-paprenjak-d18218.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="relative rounded-lg overflow-hidden
                  flex items-center justify-center group m-0"
            >
              <div
                className="flex items-center justify-center
                    relative overflow-hidden group"
              >
                <div className="bg-Mockup7 bg-cover w-32 h-24 lg:w-300  lg:h-180" />
                <div
                  className="absolute inset-0 bg-gradient-to-l 
                      from-transparent via-[#e838cc] to-[#4a22bd] 
                      opacity-0 group-hover:opacity-80 transition-all duration-700"
                >
                  {/* tittle */}
                  <div
                    className=" px-2 absolute bottom-0 translate-y-full
                            group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300
                            "
                  >
                    <div className="flex items-center mx-4 gap-x-2 text-[13px] tracking-[0.2em]">
                      {/* tittle part 1 */}
                      <div className="delay-100">Live</div>
                      {/* tittle part 1 */}
                      <div
                        className="translate-y-[500%] group-hover:translate-y-0
                                transition-all duration-500 delay-150 hidden lg:flex"
                      >
                        PROJECT 
                      </div>
                      {/* icon */}
                      <div
                        className="text-xl tranlate-y-[500%] group-hover:translate-y-0 transition-all
                                duration-300 delay-200"
                      >
                        <BsArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link
            to="https://rococo-horse-4f7a6f.netlify.app/#/pokedex"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="relative rounded-lg overflow-hidden
                  flex items-center justify-center group m-0"
            >
              <div
                className="flex items-center justify-center
                    relative overflow-hidden group"
              >
                <div className="bg-Mockup8 bg-cover w-32 h-24 lg:w-300  lg:h-180" />
                <div
                  className="absolute inset-0 bg-gradient-to-l 
                      from-transparent via-[#e838cc] to-[#4a22bd] 
                      opacity-0 group-hover:opacity-80 transition-all duration-700"
                >
                  {/* tittle */}
                  <div
                    className=" px-2 absolute bottom-0 translate-y-full
                            group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300
                            "
                  >
                    <div className="flex items-center mx-4 gap-x-2 text-[13px] tracking-[0.2em]">
                      {/* tittle part 1 */}
                      <div className="delay-100">Live</div>
                      {/* tittle part 1 */}
                      <div
                        className="translate-y-[500%] group-hover:translate-y-0
                                transition-all duration-500 delay-150 hidden lg:flex"
                      >
                        PROJECT 
                      </div>
                      {/* icon */}
                      <div
                        className="text-xl tranlate-y-[500%] group-hover:translate-y-0 transition-all
                                duration-300 delay-200"
                      >
                        <BsArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default WorkSlider;

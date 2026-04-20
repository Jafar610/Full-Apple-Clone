import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper";
import { Autoplay } from "swiper/modules";

function Store() {
  return (
    <>
      <div className="text-center mt-10">
        <div>
          <h1>Popular Product Catagories</h1>
        </div>

        <div className="flex justify-space-around items-center">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={3}
            spaceBetween={10}
            loop={true}
            autoplay={{
              delay: 3000, // 3 seconds
              disableOnInteraction: false,
            }}
          >

            <SwiperSlide>
              <div>
                <img src="" alt="" />
                <h1>iMac</h1>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <img src="" alt="" />
                <h1>iMac</h1>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <img src="" alt="" />
                <h1>iMac</h1>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <img src="" alt="" />
                <h1>iMac</h1>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Store;

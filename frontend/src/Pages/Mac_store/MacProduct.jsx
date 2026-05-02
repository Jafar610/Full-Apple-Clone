import React from "react";
import mac from "../../assets/img/products/mac.png";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper";
import { Autoplay } from "swiper/modules";

function MacProduct() {
  return (
    <>
      <div className="text-center mt-10 bg-white ">
        <div>
          <h1 className="font-bold text-5xl font-poppins text-gray-800">Mac</h1>

          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={10}
            loop={true}
            autoplay={{
              delay: 3000, // 3 seconds
              disableOnInteraction: false,
            }}
          >
            <div className="flex justify-center items-center flex-wrap mt-10 gap-10 ">
              <SwiperSlide>
                <Link to="/mac/product" className="flex justify-center items-center">
                  <div className="text-center">
                    <img src={mac} alt="image" className="w-35 h-30" />
                    <p>Product name</p>
                  </div>
                </Link>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default MacProduct;

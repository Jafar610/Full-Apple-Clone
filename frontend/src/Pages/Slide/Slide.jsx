import React from "react";
import iphone from "../../assets/img/products/iphone 15Pro.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
function Slide() {
  return (
    <>
      <div className="flex justify-center items-center w-full bg-white">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className="flex justify-around items-center bg-gray-100  w-full">
              <div className="text-center">
                <h1 className="text-6xl font-bold font-poppins pt-3 pb-3 ">
                  iPhone 15 Pro
                </h1>
                <p className="text-3xl font-poppins font-meduim mt-2 mb-2">
                  Titanum, So strong. <br />
                  So light, So Pro.
                </p>

                <p className="text-3xl font-poppins ">
                  <span className="line-through text-2xl text-gray-800 mr-5">
                    $1,199
                  </span>{" "}
                  $1,099
                </p>

                <div className="flex justify-center items-center mt-5">
                  <button className="border rounded-xl px-10 py-2 mr-3 bg-blue-700 text-white text-md">
                    Buy
                  </button>
                  <button className="border border-blue-700 rounded-xl px-8 py-2 text-md hover:bg-blue-700 hover:text-white text-black">
                    Learn More
                  </button>
                </div>
              </div>
              <div>
                <img src={iphone} alt="" className="w-100 h-100" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex justify-around items-center bg-gray-100  w-full">
              <div className="text-center">
                <h1 className="text-6xl font-bold font-poppins pt-3 pb-3 ">
                  iPhone 15 Pro
                </h1>
                <p className="text-3xl font-poppins font-meduim mt-2 mb-2">
                  Titanum, So strong. <br />
                  So light, So Pro.
                </p>

                <p className="text-3xl font-poppins ">
                  <span className="line-through text-2xl text-gray-800 mr-5">
                    $1,199
                  </span>{" "}
                  $1,099
                </p>

                <div className="flex justify-center items-center mt-5">
                  <button className="border rounded-xl px-10 py-2 mr-3 bg-blue-700 text-white text-md">
                    Buy
                  </button>
                  <button className="border rounded-xl px-8 py-2 text-md hover:bg-blue-700 hover:text-white border-blue-700">
                    Learn More
                  </button>
                </div>
              </div>
              <div>
                <img src={iphone} alt="" className="w-100 h-100" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Slide;

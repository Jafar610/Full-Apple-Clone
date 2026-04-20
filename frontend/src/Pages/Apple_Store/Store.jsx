import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper";
import { Autoplay } from "swiper/modules";
import imac from "../../assets/img/products/store-pro1.png";
import iphonePro from '../../assets/img/products/store-phone-pro1.png'
import ipad from '../../assets/img/products/store-pro3.png'
import miniMac from '../../assets/img/products/store-pro4.png'
function Store() {
  return (
    <>
      <div className="text-center mt-10">
        <div>
          <h1 className="font-bold text-4xl font-poppins text-gray-600">Popular Product Catagories</h1>
        </div>

        <div className="flex justify-between items-center ml-10 mr-10 mb-15">
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
              <div className="bg-gray-50 border border-gray-100 shadow-sm rounded-xl mt-8 text-center p-5 mr-3 ml-3 h-95">
                <img src={imac} alt="" className="m-auto" />
                <h1 className=" text-4xl text-center mt-5 mb-3 font-bold font-poppins">iMac</h1>
                <p className="text-center text-md font-meduim">
                  Advanced AI Performance and <br />
                  game changing capabilities.
                </p>

                <p className="text-center text-xl font-bold mt-3 text-gray-500">$6,999</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-gray-50 border border-gray-100 shadow-sm rounded-xl mt-8 text-center p-5 mr-3 ml-3 h-95">
                <img src={iphonePro} alt="" className="h-45 m-auto"/>
                <h1 className=" text-4xl text-center mt-5 mb-3 font-bold font-poppins">iPhone 17 pro</h1>
                <p className="text-center text-md font-meduim">Titanium, So Strong, <br />So light, So Pro.</p>

                <p className="text-center text-xl font-bold mt-3 text-gray-500">$6,999</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-gray-50 border border-gray-100 shadow-sm rounded-xl mt-8 text-center p-5 mr-3 ml-3 h-95">
                <img src={ipad} alt="" className="h-45 m-auto" />
                <h1 className="text-4xl text-center mt-5 mb-3 font-bold font-poppins">iPad</h1>
                <p className="text-center text-md font-meduim" >Super Charged by the Apple M2 chip.</p>
                <p className="text-xl font-bold mt-3 text-gray-500">$999</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-gray-50 border border-gray-100 shadow-sm rounded-xl mt-8 text-center p-5 mr-3 ml-3 h-95">
                <img src={miniMac} alt="" className="h-50 m-auto" />
                <h1 className="text-4xl text-center mb-3 font-bold font-poppins">Mini Mac</h1>
                <p className="text-center text-md font-meduim">
                  Powered alone <br />
                  SuperPowered together.
                </p>
                <p className="text-xl font-bold mt-3 text-gray-500">$799</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Store;

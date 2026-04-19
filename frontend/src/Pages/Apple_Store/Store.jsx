import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper";
import { Autoplay } from "swiper/modules";

function Store() {
  return (
    <>
     <div className="text-center">
        <div>
            <h1>Popular Product Catagories</h1>
        </div>

        <div className="flex justify-center items-center">
            <div>
                <img src="" alt="" />
                <h1>iMac</h1>
            </div>

            <div>
                <img src="" alt="" />
                <h1>iMac</h1>
            </div>

            <div>
                <img src="" alt="" />
                <h1>iMac</h1>
            </div>
        </div>
     </div>
    </>
  );
}

export default Store;

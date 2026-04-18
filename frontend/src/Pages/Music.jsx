import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Autoplay } from "swiper/modules";

function Music() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3002/music")
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div>
        <div className="bg-gray-100 px-5 py-5">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={3}
            spaceBetween={10}
            loop={data.length > 4}
            autoplay={{
              delay: 3000, // 3 seconds
              disableOnInteraction: false,
            }}
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer w-full">
                  <img src={item.album.cover_xl} alt="" className="h-100" />
                  <p className=" font-bold text-xl p-3 absolute bottom-0 left-20 bg-transparent text-white">{item.title}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Music;

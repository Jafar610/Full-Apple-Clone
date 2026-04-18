import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Autoplay } from "swiper/modules";

function Entertainment() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios
      .get("https://itunes.apple.com/search?term=tv&media=tvShow&limit=160")
      .then((res) => {
        setShows(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="">
        <div className="bg-[#F5F5F7] px-10 py-5">
          <h2 className="text-black-800 font-bold text-center text-5xl pt-3 mb-10">
            Endless entertainment.
          </h2>

          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={20}
            loop={shows.length > 4}
            autoplay={{
              delay: 3000, // 3 seconds
              disableOnInteraction: false,
            }}
          >
            {shows.map((item) => (
              <SwiperSlide key={item.trackId}>
                <div
                  className="bg-[#c2c2c4]  overflow-hidden 
                            transition-transform duration-300 
                            hover:scale-105 cursor-pointer"
                >
                  <img
                    src={item.artworkUrl100.replace("100x100", "1000x600")}
                    alt=""
                    className="w-full h-100 object-cover"
                  />

                  <p className="absolute bg-transparent bottom-0 left-30 text-white  font-bold text-xl pb-5">{item.trackName}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Entertainment;

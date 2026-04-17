import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState, useEffect } from "react";
function Entertainment() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://itunes.apple.com/search?term=tv&media=tvShow&limit=10")
      .then((res) => res.json())
      .then((data) => setShows(data.results));
  }, []);

  return (
    <>
      <div className="">
        <div className="bg-black px-10 py-10">
          <h2 className="text-white">Endless entertainment.</h2>

          <Swiper spaceBetween={20} slidesPerView={4} loop={true}>
            {shows.map((item) => (
              <SwiperSlide key={item.trackId}>
                <div
                  className="bg-zinc-900 rounded-2xl overflow-hidden 
                            transition-transform duration-300 
                            hover:scale-105 cursor-pointer"
                >
                  <img
                    src={item.artworkUrl100.replace("100x100", "600x400")}
                    alt=""
                    className="w-full h-52 object-cover"
                  />

                  <p className="text-white text-sm p-3">{item.trackName}</p>
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

import iphone from "../../assets/img/products/iphone 15Pro.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import {useState, useEffect} from 'react';

function Slide() {
  const [slides, setSlides] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:3002/slide')
    .then(res=> res.json())
    .then(data=>{
      setSlides(data);
    })
  },[])



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
          {slides.map(slide=>(
            <SwiperSlide key={slide.id}>
            <div className="flex justify-around items-center bg-gray-100  w-full">
              <div className="text-center">
                <h1 className="text-6xl font-bold font-poppins pt-3 pb-3 ">
                  {slide.name}
                </h1>
                <p className="text-3xl font-poppins font-meduim mt-2 mb-2">
                  {slide.short_description}
                </p>
                <p className="text-3xl font-poppins ">
                  <span className="line-through text-2xl text-gray-800 mr-5">
                    ${slide.price}
                  </span>{" "}
                  ${slide.discount_price}
                </p>
                <div className="flex justify-center items-center mt-5">
                  <button onClick={()=>navigate(`/products/${slide.id}`)} className="border rounded-xl px-10 py-2 mr-3 bg-blue-700 text-white text-md">
                    Buy
                  </button>
                  <button onClick={()=>navigate(`/products/${slide.id}`)} className="border border-blue-700 rounded-xl px-8 py-2 text-md hover:bg-blue-700 hover:text-white text-black">
                    Learn More
                  </button>
                </div>
              </div>
              <div>
                <img src={slide.image} alt="" className="w-100 h-100" />
              </div>
            </div>
          </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Slide;

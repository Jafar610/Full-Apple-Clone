import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper";
import { Autoplay } from "swiper/modules";
import { useState } from "react";
import axios from "axios";

function MacCategory() {
  const [products, setProducts] = useState([]);
  useState(() => {
    axios.get("http://localhost:3002/mac-category").then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <>
      <div className="text-center mt-10">
        <div>
          <h1 className="font-bold text-4xl font-poppins text-gray-600">
            Popular Mac Products
          </h1>
        </div>

        <div className="flex justify-between items-center ml-10 mr-10">
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
            {products.map((product) => {
              return (
                <SwiperSlide key={product.id}>
                  <div className="bg-gray-50 border border-gray-100 shadow-sm rounded-xl mt-8 text-center p-5 mr-3 ml-3 h-95 mb-10">
                    <img
                      src={product.image}
                      alt=""
                      className="m-auto w-40 h-40"
                    />
                    <h1 className=" text-4xl text-center mt-5 mb-3 font-bold font-poppins">
                      {product.name}
                    </h1>
                    <p className="text-center text-md font-meduim">
                      {product.short_description}
                    </p>
                    <p className="text-center text-xl font-bold mt-3 text-gray-500">
                      ${product.price}
                    </p>

                    <div className="flex justify-center items-center mt-2 mb-5">
                      <button
                        onClick={() => navigate(`/products/${slide.id}`)}
                        className="border rounded-xl px-10 py-2 mr-3 bg-blue-700 text-white text-md"
                      >
                        Buy
                      </button>
                      <button
                        onClick={() => navigate(`/products/${slide.id}`)}
                        className="border border-blue-700 rounded-xl px-8 py-2 text-md hover:bg-blue-700 hover:text-white text-black"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default MacCategory;

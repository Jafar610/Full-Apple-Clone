import React from "react";
import mac from "../../assets/img/products/mac.png";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper";
import { Autoplay } from "swiper/modules";
import { useState, useEffect } from "react";
import axios from "axios";
import Ipad from "../Ipad";

function IpadProduct() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3002/ipad-category").then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <>
      <div className="text-center mt-10 bg-white ">
        <div className="ml-10 mr-10">
          <h1 className="font-bold text-5xl font-poppins text-gray-800">Ipad Product</h1>

          <Swiper
            modules={[Autoplay]}
            slidesPerView={5}
            spaceBetween={10}
            loop={true}
            autoplay={{
              delay: 3000, // 3 seconds
              disableOnInteraction: false,
            }}
          >
            <div className="flex justify-center items-center  mt-10 gap-10">
              {products.map((product) => {
                return (
                  <SwiperSlide key={product.id}>
                    <Link
                      to={`/products/${product.id}`}
                      className="flex justify-center items-center mt-5 mb-5 shadow-sm rounded-xl p-5 mr-3 ml-3 h-50 w-60 hover:shadow-lg transition duration-300 ease-in-out"
                    >
                      <div className="flex justify-center items-center flex-col">
                        <img
                          src={product.image}
                          alt=""
                          className="m-auto w-30 h-30"
                        />
                        <h1 className=" text-md text-center mt-5 mb-5 font-bold font-mono">
                          {product.name}
                        </h1>
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default IpadProduct;

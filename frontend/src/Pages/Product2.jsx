import React from 'react'
import airpod from '../assets/img/products/airpod.jpg'
import business from '../assets/img/products/apple_bussiness.jpg'
import logo from '../assets/img/apple-logo.svg'
function Product2() {
  return (
    <>
          <div className="w-full h-screen bg-white-900 flex justify-center items-center mt-3  pb-5">
            <div className="flex justify-center items-center">
              <div className="bg-[#f5f5f7] mr-5 ml-5  h-screen w-full">
                <div className="pt-10">
                  <h1 className="text-center font-bold text-4xl pt-3 pb-3">
                    AirPods Pro 3
                  </h1>
    
                  <p className="text-center text-2xl text-black-700">
                    The World's best in-ear <br />
                    Active Noise Cancellation.
                  </p>
                  <div className="flex justify-center items-center mt-3">
                    <button className="mr-5  border px-8 py-2  rounded-full bg-blue-600 text-white border-blue-600">
                      Learn More
                    </button>
                    <button className=" border px-8 py-2  rounded-full  text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white">
                      Buy
                    </button>
                  </div>
                </div>
    
                <img src={airpod} alt="" />
              </div>
    
    
    
    
              <div className="bg-[#f9fdfe] h-screen w-full mr-5">
                <div className='flex justify-center items-center'>
                    <img src={logo} alt="" className='w-15 mt-10' />
                    <h1 className="text-center font-bold text-5xl pt-15 pb-3 text-black-800 font-popins">
                  Business
                </h1>
                </div>
                
    
                <p className="text-center text-2xl text-black-700 pt3 pb-3">
                  The tools you need to run and grow <br /> your business. All in one place.
                </p>
                <div className="flex justify-center items-center mt-3">
                  <button className="mr-5  border px-8 py-2  rounded-full bg-blue-600 text-white border-blue-600">
                    Learn More
                  </button>
                </div>
                <img src={business} alt="" />
              </div>
            </div>
          </div>
        </>
  )
}

export default Product2
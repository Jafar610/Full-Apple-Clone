import React from 'react'
import ipad from '../assets/img/products/Ipad.jpg'
function Ipad() {
  return (
    <>
      <div className="flex justify-center items-center w-full  h-screen bg-black">
              <div>
                <div className="text-center mt-10">
                  <h1 className="text-6xl font-bold mb-5 text-white">Ipad Pro</h1>
                  <p className="text-2xl mb-2 text-white">Advanced 
                    AI Performance and <br /> game changing capabilities.
                  </p>
                </div>
      
                <div className="flex justify-center items-center">
                  <button className="mr-5 border px-8 py-2  rounded-full bg-blue-600 text-white border-blue-600">Learn more</button>
                  <button className=" border px-8 py-2  rounded-full  text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white">Buy</button>
                </div>
      
                <div>
                  <img src={ipad} alt="" className="w-full h-full object-cover object-center " />
                </div>
              </div>
            </div>  
    </>
  )
}

export default Ipad
import React from 'react'
import Mac from '../assets/img/products/Mac.png'
function Macbook() {
  return (
    <>
    <div className="flex justify-center items-center w-full h-screen bg-gray-50 mt-3 pb-5">
            <div className='mt-15 '>
              <div className="text-center">
                <h1 className="text-6xl font-bold mb-5">MacBook Neo</h1>
                <p className="text-xl mb-2">Amazing Mac. Surpricing Price.</p>
              </div>
    
              <div className="flex justify-center items-center">
                <button className="mr-5 border px-8 py-2  rounded-full bg-blue-600 text-white border-blue-600">Learn more</button>
                <button className=" border px-8 py-2  rounded-full  text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white">Buy</button>
              </div>
    
              <div>
                <img src={Mac} alt="" className="w-170" />
              </div>
            </div>
          </div><br />
    </>
  )
}

export default Macbook
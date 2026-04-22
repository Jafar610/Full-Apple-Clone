import React from 'react'

function Categories() {
  return (
    <>
        <div className='bg-gray-200 w-screen pl-15'>
            <div className='mt-2 mb-5 p-3'>
               <h1 className='text-4xl font-bold text-start text-gray-700'>Add New Category</h1> 
            </div>

            <div className='bg-white text-start mr-50 p-15 rounded-md shadow-md'>
                <h1 className=' pb-3 text-3xl font-bold font-poppins text-gray-500'>Category Information</h1>
                <form action="">
                    <label htmlFor="" className='block pb-2 text-lg'>Category Name <span className='text-red-700'>*</span></label>
                    <input type="text" name="" id="" placeholder='Enter Category name' className='border pr-20 py-2 rounded-md mt-2 ml-2 border-gray-300 outline-gray-200 pl-5 mb-2' />
                   
                    <button type='submit' className='block flex justify-center items-center border px-10 py-2 rounded-md mt-5 hover:bg-black hover:text-white'>Add Category</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Categories
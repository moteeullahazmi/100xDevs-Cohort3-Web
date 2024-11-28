import React from 'react'

const OTP = () => {
  return (
    <div className="flex  justify-center items-center flex-col text-white bg-[#002A5A] h-screen">
        <h1 className="text-3xl m-4 ">Webinar.gg</h1>

       
        <p className="m-2">ENTER YOUR OTP.</p>

        <div className='flex flex-row justify-center items-center'>
        <input className='m-2 w-8 h-8 rounded-md text-gray-900' type="number" name="" id="" />
        <input className='m-2 w-8 h-8 rounded-md text-gray-900' type="number" name="" id="" />
        <input className='m-2 w-8 h-8 rounded-md text-gray-900' type="number" name="" id="" />
        <input className='m-2 w-8 h-8 rounded-md text-gray-900' type="number" name="" id="" />
        <input className='m-2 w-8 h-8 rounded-md text-gray-900' type="number" name="" id="" />
        <input className='m-2 w-8 h-8 rounded-md text-gray-900' type="number" name="" id="" />
        </div>
        <button className="hover:bg-sky-700 m-2 border rounded px-4 py-2">Continue</button>
      </div>
  )
}

export default OTP

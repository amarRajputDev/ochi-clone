// import React from 'react'

import AnimateButton from "../components/AnimateButton"
import Eye from "../components/Eye"

function YellowPage() {
  return (
    <div className='  min-h-screen p-5 relative w-screen flex flex-col justify-center bg-[#CDEA68] items-center'>
        <div className=" h-screen text-[15vw] text-[#212121] grid place-content-center leading-[11vw] text-center grotesk">
        <h1>READY</h1>
        <h1>TO START</h1>
        <h1>THE PROJECT</h1>
        </div>


        {/* button  */}
        <div className=" flex flex-col  justify-between gap-3 items-center">
            <AnimateButton title="START THE PROJECT" />
            <h1 className=" neue">OR</h1>
            <AnimateButton title="AMAR@OCHI.DESIGN" isBordered={true} />


        </div>
        <div data-scroll data-scroll-section data-scroll-speed=".3" className=" mt-52 bg-red-500 absolute ">
            <Eye/>
        </div>
      
    </div>
  )
}

export default YellowPage

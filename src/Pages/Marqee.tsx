import { motion } from "motion/react"


function Marqee() {
   
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className="bg-[#004D43] z-10 w-screen py-16 overflow-hidden rounded-2xl">
        <motion.div animate={{x:"-50%"}} transition={{ease:"linear", repeat:Infinity, duration:25}} className=" text-white border-y-2 w-fit border-white leading-none flex whitespace-nowrap grotesk">
        <h1 className=" text-[25vw] uppercase ">
             We are ochi
        </h1>
        <h1 className=" text-[25vw] uppercase pl-9">
            We are ochi
        </h1>
        <h1 className=" text-[25vw] uppercase pl-9">
            We are ochi
        </h1>
        <h1 className=" text-[25vw] uppercase pl-9">
            We are ochi
        </h1>
            
        </motion.div>
      
    </div>
  )
}

export default Marqee

import { motion } from 'motion/react'
import { useState } from 'react'
import { GoArrowUpRight } from 'react-icons/go'

function AnimateButton({title , isBordered = false} : {title : string , isBordered? : boolean} ) {
      const [IseHover, setIseHover] = useState(false)
    
    
  return (
    <div>
        <div onMouseEnter={()=> setIseHover(true)} onMouseLeave={()=> setIseHover(false)}  className= {`cursor-pointer mt-3 group  p-[5px] w-fit pl-7 flex gap-5 justify-between text-[#F2F2F2]  uppercase items-center h-[60px] rounded-full ${isBordered && "border border-[#212121]"} ${isBordered ? "" : " bg-[#212121]"}`}>
                  <h1 className={` uppercase neue ${isBordered ? " text-[#212121] " : ""} `}>{title}</h1>
                  <motion.div initial={{scale:0.3}} transition={{duration:0.2}} animate={IseHover ? {scale:1} : {scale:0.3}} className= {`w-[50px] cursor-pointer h-[50px] grid place-content-center rounded-full ${isBordered ? "bg-[#212121] text-white" : "bg-white text-[#212121] "} `}>
                    <GoArrowUpRight className=" opacity-0 duration-150 group-hover:opacity-100" size={24}  />
                  </motion.div>

      </div>
      
    </div>
  )
}

export default AnimateButton

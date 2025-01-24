import { motion } from "motion/react"
// import { div } from "motion/react-client"
import { useRef } from "react"


function Cards() {
  const ref = useRef(null)
  
  return (
    <div ref={ref} className=" w-screen min-h-screen  gap-4 md:p-14 p-4  bg-[#F1F1F1] grid lg:grid-cols-4  place-content-center rounded-2xl grid-cols-1 ">
      {/* Child 1 */}
      <motion.div  dragConstraints={{ top:0 , left:0 , right:0 , bottom:0 }} drag className="col-span-1 lg:col-span-2 grid place-content-center relative h-[55vh] rounded-2xl bg-[#004D43]">
        <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" width={150} alt="" />

        <button className=" absolute w-fit px-3 text-base py-1 rounded-full border border-[#BBDD65] text-[#BBDD65] left-6 bottom-6">&copy; 2019-2022</button>
        
      </motion.div>
      
      {/* Child 2 */}
      <motion.div dragConstraints={{ top:0 , left:0 , right:0 , bottom:0 }} drag className="col-span-1 relative h-[55vh] grid place-content-center rounded-2xl bg-[#212121]">
      <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" width={150} alt="" />

      <button className=" absolute w-fit px-3 text-base py-1 rounded-full border border-[#DADADA] text-[#DADADA] left-6 bottom-6">RATING 5.0 ON CLUTCH</button>

      </motion.div>
      
      {/* Child 3 */}
      <motion.div dragConstraints={{ top:0 , left:0 , right:0 , bottom:0 }} drag className="col-span-1 relative h-[55vh] grid place-content-center rounded-2xl bg-[#212121]">
      <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" width={100} alt="" />

      <button className=" absolute w-fit px-3 text-base py-1 rounded-full border text-[#DADADA] border-[#DADADA] left-6 bottom-6">BUSSINESS BOOTCAMP ALUMNY</button>

      </motion.div>
    </div>
  )
}

export default Cards

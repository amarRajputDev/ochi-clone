// import { div, h1 } from "motion/react-client"
import { motion } from "motion/react"
import { GoArrowUpRight } from "react-icons/go"


function Lending() {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.5"  className="bg-[#F1F1F1] w-screen h-screen gap-10 flex flex-col">
        <div className="  h-[70vh] px-4 md:px-12  pt-[20vh] ">

            {

            ["we create" , "eye-opening","presentetion"].map((item, index) => (
                <div key={index} className=" flex">
                    {
                        index ==1 && (
                            <motion.div initial={{width:10}} animate={{width:"15vw"}} transition={{duration:1 , type:"spring",bounce:0.5 , delay:0.5}} whileHover={{width:"12vw"}} className=" h-[9vw] md:h-[7vw] bg-[url('https://www.pixelstalk.net/wp-content/uploads/2016/12/Color-Splash-Wallpaper-for-PC.jpg')] bg-cover bg-center bg mt-[5px] rounded-xl w-[15vw]  ">

                            </motion.div>
                        )
                    }
                <h1 className="grotesk font-semibold text-[14vw] md:text-[9vw] leading-[10vw] md:leading-[7vw] uppercase ">
                    {item}
                </h1>
                </div>
            ))
            }

        </div>

        {/* footer  */}
        <div className=" border-t-2 border-[#D2D2D2] p-4 md:px-12 md:mt-16 h-[30vh]  mb-10 ">
            <div className=" text-[17px] neue font-[400] flex flex-col gap-5 md:flex-row md:justify-between">
                <h1>For public and private companies</h1>
                <h1>From the first pitch to IPO</h1>
                <div className=" flex group border items-center w-fit justify-center gap-2">
                    <button className="px-4 py-2 border-2 group-hover:bg-black duration-300 text-[15px] uppercase group-hover:text-white  border-black rounded-full">Start the project</button>
                    <span className=" p-2 hidden md:block group-hover:bg-black duration-300 group-hover:text-white delay-75 rounded-full border-2 border-black">
                    <GoArrowUpRight size={24} />
                    </span>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Lending

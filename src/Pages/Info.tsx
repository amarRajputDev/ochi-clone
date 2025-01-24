import { motion } from "motion/react"
import { useState } from "react"
import { GoArrowUpRight } from "react-icons/go"


function Info() {

  const [IseHover, setIseHover] = useState(false)


  

  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1"  className="bg-[#CDEA68]   rounded-3xl text-[#212121]">
        <div  className=" w-screen min-h-screen  ">
          {/* section1  */}
            <div className=" px-4 md:px-12 w-full md:py-7 mt-2 relative h-[50vh] md:pr-56  grid place-content-center ">
            <h1 className="neue text-[25px] md:text-[35px]  lg:text-[55px] md:leading-tight lg:leading-[55px] font-[400] ">
            Ochi is a strategic presentation agency for forw&shy;ard-thinking businesses that need to <u> raise funds, sell product, explain complex ideas,</u> and <u>hire great pe&shy;ople</u>.
            </h1>

            </div>


            {/* section2  */}
            <div className=" md:px-12 px-4 min-h-[50vh] font-normal w-full  border-t   flex flex-col lg:flex-row gap-10 py-4 leading-normal tracking-tighter text-[17px] border-t-[#99AD53]">
            <div className=" md:flex-[2]  w-fit">
              <h1 className=" ">What you can expect:</h1>
            </div>


            <div className=" flex-1 ">
              <h1>
              We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it's live or digital, delivered for one or a hundred people.
              </h1>
              <h1 className=" mt-10">
              We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it's live or digital, delivered for one or a hundred people.

              We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
              </h1>
            </div>


            <div className=" flex-1 lg:ml-16  flex flex-col gap-5 justify-center items-end">
              <div className=" w-full">
                <h1 className=" text-left">S:</h1>
              </div>
              <div className=" w-full ">
                <ul>
                  <li className=" border-b border-b-[#212121] w-fit">Instagram</li>
                  <li className=" border-b border-b-[#212121] w-fit">Behance</li>
                  <li className=" border-b border-b-[#212121] w-fit">Facebook</li>
                  <li className=" border-b border-b-[#212121] w-fit">Linkedin</li>
                </ul>
              </div>
            </div>
            </div>


            {/* section3  */}

            <div className=" w-full flex flex-col border-t border-t-[#99AD53] gap-9 p-4 md:px-12  flex-1 lg:flex-row h-[70vh]">
              {/* text  */}
              <div className="  flex-1 ">
                <h1 className=" text-[7vw]  font-[400]  md:text-[4vw]">
                  Our approch :
                </h1>

                <div onMouseEnter={() => setIseHover(true)} onMouseLeave={()=> setIseHover(false)} className=" mt-3 group w-[200px] p-[5px] pl-7 flex justify-between text-[#F2F2F2] uppercase items-center h-[60px] rounded-full bg-black">
                  <h1 >Read More</h1>
                  <motion.div initial={{scale:0.3}} transition={{duration:0.2}} animate={IseHover ? {scale:1} : {scale:0.3}} className=" w-[50px] cursor-pointer h-[50px] text-[#212121] grid place-content-center rounded-full bg-white">
                    <GoArrowUpRight className=" opacity-0 duration-150 group-hover:opacity-100" size={24}  />
                  </motion.div>

                </div>

              </div>

              {/* image  */}
              <motion.div
               
               className="  rounded-2xl overflow-hidden flex-1 "
               animate={IseHover ? {scale:0.95} : {scale:1}}
               whileHover={{scale:0.95}}
               transition={{duration:1}}
               >

               <motion.img animate={IseHover ? {scale:1.1} : {scale:1}} whileHover={{scale:1.1}} transition={{duration:1}} src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" className="w-full h-full object-cover" alt="image"  />

              </motion.div>

            </div>

        </div>
    </div>
  )
}

export default Info

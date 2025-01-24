import { motion } from "motion/react";
import { useState } from "react";
import { cardData } from "../types";

function DuoCards({ cardData }: { cardData: cardData }) {
  const [LeftHover, setLeftHover] = useState(false);
  const [RightHover, setRightHover] = useState(false);
  return (
    <div className=" relative w-screen min-h-screen px-4 lg:px-12 flex gap-8 flex-col lg:flex-row">
      {/* Left  */}
      <div className=" flex-1 lg:w-1/2 flex flex-col gap-5  py-8">
        {/* Title  */}
        <div className=" flex items-center gap-4">
          <div className=" h-3 w-3 rounded-full bg-black"></div>
          <h1 className=" uppercase">{cardData.titleLeft}</h1>
        </div>

        {/* image  */}

        <motion.div
          animate={LeftHover ? { scale: 0.95 } : { scale: 1 }}
          transition={{ duration: 0.5 }}
          onMouseEnter={() => setLeftHover(true)}
          onMouseLeave={() => setLeftHover(false)}
          className=" h-[80%] w-full rounded-2xl overflow-hidden"
        >
          <motion.img
            animate={LeftHover ? { scale: 1.1 } : { scale: 1 }}
            transition={{ duration: 0.5 }}
            src={cardData.imageLeft}
            alt=""
            className=" w-full h-full object-cover"
          />
        </motion.div>

        {/* Buttons  */}
        <div className=" w-full flex-wrap flex gap-3">
          {cardData.buttonLeft.map((item, index) => (
            <button
              key={index}
              className=" w-fit hover:bg-black hover:text-white duration-500 px-[10px] py-[2px] border-[2px] border-black rounded-full uppercase"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Right  */}
      <div className=" flex-1 lg:w-1/2 flex flex-col gap-5  py-8">
        {/* Title  */}
        <div className=" flex items-center gap-4">
          <div className=" h-3 w-3 rounded-full bg-black"></div>
          <h1 className=" uppercase">{cardData.titleRight}</h1>
        </div>

        {/* image  */}

        <motion.div
          animate={RightHover ? { scale: 0.95 } : { scale: 1 }}
          transition={{ duration: 0.5 }}
          onMouseEnter={() => setRightHover(true)}
          onMouseLeave={() => setRightHover(false)}
          className=" h-[80%] w-full rounded-2xl overflow-hidden"
        >
          <motion.img
            animate={RightHover ? { scale: 1.1 } : { scale: 1 }}
            transition={{ duration: 0.5 }}
            src={cardData.imageRight}
            alt=""
            className=" w-full h-full object-cover"
          />
        </motion.div>

        {/* Buttons  */}
        <div className=" w-screen flex flex-wrap gap-3">
          {cardData.buttonRight.map((item, index) => (
            <button
              key={index}
              className=" w-fit px-[10px] hover:bg-black hover:text-white duration-500 py-[2px] border-[2px] border-black rounded-full uppercase"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* left  */}
      <div className=" overflow-hidden w-fit  grotesk leading-tight  flex justify-center items-center  absolute left-1/2 top-1/2 -translate-y-[50%]  -translate-x-[50%]">
        {cardData.titleLeft.split("").map((item, index) => (
          <motion.span
            initial={{ y: 150 }}
            animate={LeftHover ? { y: 0, opacity: 1 } : { y: 150 }}
            transition={{
              duration: 0.3,
              delay: index * 0.05,
              ease: [0.25, 1, 0.5, 1],
            }}
            className=" text-[9vw] leading-[7vw]  font-bold uppercase text-[#CDEA68] "
            key={index}
          >
            {item === " " ? "\u00A0" : item}
          </motion.span>
        ))}
      </div>

      {/* right  */}
      <div className=" overflow-hidden  grotesk leading-tight  flex justify-center items-center  absolute left-1/2 top-1/2 -translate-y-[50%]  -translate-x-[50%]">
        {cardData.titleRight.split("").map((item, index) => (
          <motion.span
            initial={{ y: 150 }}
            animate={RightHover ? { y: 0, opacity: 1 } : { y: 150 }}
            transition={{
              duration: 0.3,
              delay: index * 0.05,
              ease: [0.25, 1, 0.5, 1],
            }}
            className=" text-[9vw] leading-[7vw]  font-bold uppercase text-[#CDEA68] "
            key={index}
          >
            {item === " " ? "\u00A0" : item}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

export default DuoCards;

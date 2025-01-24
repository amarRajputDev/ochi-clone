
import DuoCards from "../components/DuoCards"
import { cardData } from "../types"

import AnimateButton from "../components/AnimateButton"

function Projects() {
 
  const cardData : cardData[] = [
    {
      titleLeft: "Cardboard Spaceship",
      titleRight: "AH2 & Matt Horn",
      imageLeft: "https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png",
      imageRight: "https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png",
      buttonLeft: ["cranded template" , "sales deck" , "social media template"],
      buttonRight: ["pitch deck"]
     
    } ,
    {
      titleLeft:"fyde" ,
      titleRight:"visa" ,
      imageLeft:"https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" ,
      imageRight: "https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg",
      buttonLeft:["audit" , "copyright" , "sales deck" , "slides design"] ,
      buttonRight:["agency" , "company presentation"] ,
    },
    {
      titleLeft:"trawa" ,
      titleRight:"premium blend" ,
      imageLeft:"https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" ,
      imageRight: "https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png",
      buttonLeft:["brand identity" , "design research" , "investor deck"] ,
      buttonRight:["branded template"] ,

    }
  ]
  return (
    <div  className="bg-[#F1F1F1]">
      <div className=" w-full h-[30vh] flex items-end p-12 border-b border-b-[#C1C1C1]">
         <h1 className=" neue text-6xl te">Featured projects</h1>
      </div>
      {
        cardData.map((item , index)=>(
          <DuoCards key={index} cardData={item} />
        ))
    
      }
      <div className=" w-full grid place-content-center">
      <AnimateButton title={"view all case studies"}/>
      </div>
    </div>
  )
}

export default Projects

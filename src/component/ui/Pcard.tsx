import img from "../../../public/weapon-fantasy-spell-book-magig-svgrepo-com.svg"
import play from "../../../public/play-circle-svgrepo-com.svg"
import code from "../../../public/code-circle-svgrepo-com.svg"
import { useState } from "react"
import { motion, Variants} from "framer-motion";


const cardVariants: Variants = {
    offscreen: {
      y: 300
    },
    onscreen: {
      y: 50,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration:1,
        delay:0
      }
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
  };



export default function Pcard() {
    const [show,setShow]=useState(false)
  return (
    <motion.div 
    variants={cardVariants}
    // whileHover={{ scale: 1.1 }}
    // whileTap={{ scale: 0.95 }}
    initial="offscreen"
    whileInView="onscreen"
    viewport={{once:true,  amount: 0.8 }}


    className="w-80 bg-slate-300 rounded-lg relative"   onMouseOver={()=>setShow(true)}  onMouseLeave={()=>setShow(false)} >
        <h1 className="font-bold text-2xl text-center  pt-3">sdfghjkl</h1>
        {show&&(
            <motion.p 
            //  initial={{x:-400}} 
             animate={{x:0}}
             transition={{duration:1.5}}
            className="bg-white w-60 rounded-r-lg text-center pl-3 absolute top-12  ">Lorem ipsum dolor sit, amet consectetur 
            adipisicing elit. Blanditiis odio harum accusamus error. Perspiciatis quos fugiat sed mollitia recusandae eum consequatur,
             adipisci impedit esse s
            ! </motion.p>
          )
     
          }
         <img src={img} alt="svg"  className="h-60 w-60 mx-auto" />
         <div className="flex h-20 items-center my-5">
         <img src={play} alt="svg"  className="h-10 w-10 ml-5 " />
          <div className="flex items-center ml-auto">
          <img src={code} alt="svg"  className="h-10 w-10 mr-5 " /> 
          {show&&(
            <p className="bg-white w-32 rounded-l-lg text-center pl-3">Lorem <br /> 
            minus  <br />
             blanditiis?</p>
          )
          
          }
          </div>
         </div>  
    </motion.div>
  )
}

import { ReactNode } from "react"
import {motion} from "framer-motion"


type props={
    svg:ReactNode
    name:string
}
const loaderVariant={
  animationOne:{
    x:[-50,50],
    y:[0,-50],
    transition:{
        x:{
            // yoyo:Infinity,
            repeat:Infinity,
            duration:0.5,
            delay:1
        },
        y:{
            // yoyo:Infinity,
            repeat:Infinity,
            duration:0.25,
            delay:1

        },
        ease:"easeInOut"
    }

},
}




export default function Card({svg,name}:props) {
  return (
    <motion.div
    className="w-40 h-40 rounded-lg shadow-2xl  my-5 ml-40
     shadow-black cursor-pointer hover:opacity-0.5 transition
     ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:duration-300  "
     variants={loaderVariant}
     animate="animationOne"
     
     >
         <div className="flex justify-center pt-5 ">{svg}</div>
         <p className="text-center mt-5 text-myblue font-bold title ">{name}</p>
    </motion.div>
  )
}

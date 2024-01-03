import Card from "../component/ui/Card"
import Css from "../component/ui/Svg"
import {motion,useAnimation} from 'framer-motion'
import { useEffect ,useMemo,useState} from "react"
import ScrollCarousel from 'scroll-carousel-react';

const loaderVariant={
    animationOne:{
        x:[-20,20],
        y:[0,-30],
        transition:{
            x:{
                // yoyo:Infinity,
                repeat: Infinity,
                duration:0.5,
               
            },
            y:{
                // yoyo:Infinity,
                repeat: Infinity,
                duration:0.25,
               

            },
            ease:"easeInOut"
        }

    },
}


export default function Skills() {
  const [auto,setAuto]=useState(true)
const card=useMemo(()=>{
    return(
      <ScrollCarousel className="my-20"
      autoplay={auto}
      autoplaySpeed={8}
      speed={7}
      onReady={() => console.log('I am ready')}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10,].map((item) => (
        <div  onMouseOver={()=>setAuto(false)}  onMouseLeave={()=>setAuto(true)} ><Card  svg={<Css />}  name="Css" /></div>
      ))}
    </ScrollCarousel>

    )
 },[auto])



  return (
    <div className="h-screen bg-white mb-20">
          <h1 className="text-myblue font-bold title text-5xl text-center mb-20">Skills</h1>
          <motion.div className="w-5 h-5 bg-pink-600 rounded-full ml-[650px]"
         variants={loaderVariant}
         animate="animationOne"
        // animate={animation}
        >
        </motion.div>
         {card}
    </div>
  )
}



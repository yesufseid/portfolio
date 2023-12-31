import Card from "../component/ui/Card"
import Css from "../component/ui/Svg"
import {motion,useAnimation} from 'framer-motion'
import { useEffect } from "react"

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
    animationTow:{
      x:[0,-2000],
      y:0,
      transition:{
          x:{
            repeat: Infinity,
              duration:20,
              
          },
          y:{
            repeat: Infinity,
              duration:20

          },

          ease:"easeOut"
      },
     

  },

}


export default function Skills() {
  const Controls = useAnimation()
  const data=[Css,Css,Css,Css,Css,Css,Css,Css,Css,Css]
  useEffect(() => {
    Controls.start(loaderVariant.animationTow)
  }, [])
  return (
    <div className="w-full h-screen bg-white mb-20">
          <h1 className="text-myblue font-bold title text-5xl text-center mb-20">Skills</h1>
          <motion.div className="w-5 h-5 bg-pink-600 rounded-full ml-[650px]"
         variants={loaderVariant}
         animate="animationOne"
        // animate={animation}
        >
        </motion.div>
          <div className="mb-20 flex gap-2 py-10 mt-20  overflow-hidden mx-10 ">

          {
            data?.map((d)=>(
              <motion.div
              animate={Controls}
              whileHover={{scale:1.2}}
              onHoverStart={() => {
                Controls.stop()
              }}
              onHoverEnd={()=>{
                Controls.start(loaderVariant.animationTow)
              }}
          >
          <Card  svg={<Css />}  name="Css" />
          </motion.div>
            ))
          }
          </div>
         
    </div>
  )
}



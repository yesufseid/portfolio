import Card from "../component/ui/Card"
import Css from "../component/ui/Svg"
import {motion,useCycle} from 'framer-motion'

const loaderVariant={
    animationOne:{
        x:[-20,20],
        y:[0,-30],
        transition:{
            x:{
                // yoyo:Infinity,
                repeat: Infinity,
                duration:0.5,
                delay:1
            },
            y:{
                // yoyo:Infinity,
                repeat: Infinity,
                duration:0.25,
                delay:1

            },
            ease:"easeInOut"
        }

    },
    animationTow:{
      y:[0,-40],
      x:0,
      transition:{
          x:{
            repeat: Infinity,
              duration:0.5
          },
          y:{
            repeat: Infinity,
              duration:0.25

          },
          ease:"easeInOut"
      }

  },

}










export default function Skills() {
  
  const [animation,cycleAnimation]=useCycle("animationOne","animationTow")


  return (
    <div className="w-full h-screen bg-white mb-20">
          <h1 className="text-myblue font-bold title text-5xl text-center mb-20">Skills</h1>
          <motion.div className="w-5 h-5 bg-pink-600 rounded-full ml-[650px]"
         variants={loaderVariant}
         animate="animationOne"
        // animate={animation}
        >
        </motion.div>
          <div className="mb-20 flex gap-5 py-10  overflow-hidden ">
          <Card  svg={<Css />}  name="Css" />
          {/* <Card  svg={<Css />}  name="Css" />
          <Card  svg={<Css />}  name="Css" />
          <Card  svg={<Css />}  name="Css" />
          <Card  svg={<Css />}  name="Css" />
          <Card  svg={<Css />}  name="Css" />
          <Card  svg={<Css />}  name="Css" />
          <Card  svg={<Css />}  name="Css" />
          <Card  svg={<Css />}  name="Css" />
          <Card  svg={<Css />}  name="Css" /> */}
          </div>
         
    </div>
  )
}



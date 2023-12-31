import { motion, Variants } from "framer-motion";

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


export default function Box() {
  return (
    <div>
        <motion.div
           variants={cardVariants}
           whileHover={{ scale: 1.1 }}
           whileTap={{ scale: 0.95 }}
           initial="offscreen"
           whileInView="onscreen"
           viewport={{once:true,  amount: 0.8 }}
        className="flex  rounded-lg bg-slate-300 m-5 py-8 my-10 hover:bg-slate-400">
        <svg width="80px" height="80px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="bg-slate-500 ml-5 rounded-full" >
<rect width="48" height="48" fill="white" fill-opacity="0.01"/>
<path d="M2 17.4L23.0222 9L44.0444 17.4L23.0222 25.8L2 17.4Z" fill="#2F88FF" stroke="#000000" stroke-width="4" stroke-linejoin="round"/>
<path d="M44.0444 17.5101V26.7333" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.5555 21.8253V34.2667C11.5555 34.2667 16.3656 39 23.0222 39C29.6788 39 34.4889 34.2667 34.4889 34.2667V21.8253" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

       <div className="ml-3 text-lg ">
          <p  className="text-myblue font-semibold">2022-2027</p>
          <p className="font-semibold text-xl">Bsc.Envriomental Engineering</p>
          <p className="font-semibold">Addis Ababa Scince and Technology University</p>
       </div>
        </motion.div>



        <motion.div
             variants={cardVariants}
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.95 }}
             initial="offscreen"
             whileInView="onscreen"
             viewport={{ once:true, amount: 0.8 }}
        >
        <div className="flex  rounded-lg bg-slate-300 m-5 py-8 my-10 hover:bg-slate-400 ">
        <svg width="80px" height="80px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="bg-slate-500 ml-5 rounded-full">
<rect width="48" height="48" fill="white" fill-opacity="0.01"/>
<path d="M2 17.4L23.0222 9L44.0444 17.4L23.0222 25.8L2 17.4Z" fill="#2F88FF" stroke="#000000" stroke-width="4" stroke-linejoin="round"/>
<path d="M44.0444 17.5101V26.7333" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.5555 21.8253V34.2667C11.5555 34.2667 16.3656 39 23.0222 39C29.6788 39 34.4889 34.2667 34.4889 34.2667V21.8253" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

       <div className="ml-3">
          <p  className="text-myblue font-bold">2022-2027</p>
          <p className="font-semibold text-xl"  >Bsc.Envriomental Engineering</p>
          <p className="font-semibold">Addis Ababa Scince and Technology University</p>
       </div>
        </div>
    </motion.div>
    </div>
  )
}


export function EBox() {
  return (
    <div>
        <motion.div
           variants={cardVariants}
           whileHover={{ scale: 1.1 }}
           whileTap={{ scale: 0.95 }}
           initial="offscreen"
           whileInView="onscreen"
           viewport={{once:true,  amount: 0.8 }}
        className="flex  rounded-lg bg-slate-300 mx-5 py-8 mb-5 hover:bg-slate-400">
        <svg width="80px" height="80px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="bg-slate-500 ml-5 rounded-full" >
<rect width="48" height="48" fill="white" fill-opacity="0.01"/>
<path d="M2 17.4L23.0222 9L44.0444 17.4L23.0222 25.8L2 17.4Z" fill="#2F88FF" stroke="#000000" stroke-width="4" stroke-linejoin="round"/>
<path d="M44.0444 17.5101V26.7333" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.5555 21.8253V34.2667C11.5555 34.2667 16.3656 39 23.0222 39C29.6788 39 34.4889 34.2667 34.4889 34.2667V21.8253" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

       <div className="ml-3 text-lg ">
          <p  className="text-myblue font-semibold">2023- Present</p>
          <p className="font-semibold text-xl">Mentor</p>
          <p className="font-semibold">GDSC AASTU</p>
       </div>
        </motion.div>



        <motion.div
             variants={cardVariants}
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.95 }}
             initial="offscreen"
             whileInView="onscreen"
             viewport={{ once:true, amount: 0.8 }}
        >
        <div className="flex  rounded-lg bg-slate-300 m-5 py-8 my-5 hover:bg-slate-400 ">
        <svg width="80px" height="80px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="bg-slate-500 ml-5 rounded-full">
<rect width="48" height="48" fill="white" fill-opacity="0.01"/>
<path d="M2 17.4L23.0222 9L44.0444 17.4L23.0222 25.8L2 17.4Z" fill="#2F88FF" stroke="#000000" stroke-width="4" stroke-linejoin="round"/>
<path d="M44.0444 17.5101V26.7333" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.5555 21.8253V34.2667C11.5555 34.2667 16.3656 39 23.0222 39C29.6788 39 34.4889 34.2667 34.4889 34.2667V21.8253" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

       <div className="ml-3">
          <p  className="text-myblue font-bold">2023-Present</p>
          <p className="font-semibold text-xl"  >Freelancer</p>
          <p className="font-semibold">Mss Software</p>
       </div>
        </div>
    </motion.div>
    <motion.div
             variants={cardVariants}
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.95 }}
             initial="offscreen"
             whileInView="onscreen"
             viewport={{ once:true, amount: 0.8 }}
        >
        <div className="flex  rounded-lg bg-slate-300 m-5 py-8 my-5 hover:bg-slate-400 ">
        <svg width="80px" height="80px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="bg-slate-500 ml-5 rounded-full">
<rect width="48" height="48" fill="white" fill-opacity="0.01"/>
<path d="M2 17.4L23.0222 9L44.0444 17.4L23.0222 25.8L2 17.4Z" fill="#2F88FF" stroke="#000000" stroke-width="4" stroke-linejoin="round"/>
<path d="M44.0444 17.5101V26.7333" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.5555 21.8253V34.2667C11.5555 34.2667 16.3656 39 23.0222 39C29.6788 39 34.4889 34.2667 34.4889 34.2667V21.8253" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

       <div className="ml-3">
          <p  className="text-myblue font-bold">2023-Present</p>
          <p className="font-semibold text-xl"  >Freelancer</p>
          <p className="font-semibold">Mss Software</p>
       </div>
        </div>
    </motion.div>
    </div>
  )
}
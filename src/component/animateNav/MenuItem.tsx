
import { motion } from "framer-motion";
import { ReactNode } from "react";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};




const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = () => {
  const style = { border: `2px solid ${colors[0]}` };
  return (
    <div>
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder" style={style}>
       
      </div>
      <div className="text-placeholder flex justify-center items-center text-2xl hover:bg-pink-600 text-blue-600 font-bold  font-mono" style={style} >
       Home
      </div>
    </motion.li>
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder" style={style}>
      
      </div>
      <div className="text-placeholder flex justify-center items-center text-2xl hover:bg-pink-600 text-blue-600 font-bold  font-mono" style={style} >
        About
      </div>
    </motion.li>
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder" style={style}>
      
      </div>
      <div className="text-placeholder flex justify-center items-center  text-2xl hover:bg-pink-600 text-blue-600 font-bold  font-mono" style={style} >
       Resume
      </div>
    </motion.li>
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder" style={style}>
      
      </div>
      <div className="text-placeholder flex justify-center items-center text-2xl hover:bg-pink-600 text-blue-600 font-bold  font-mono" style={style} >
        Projects
      </div>
    </motion.li>
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder" style={style}>
      
      </div>
      <div className="text-placeholder  flex justify-center items-center text-2xl hover:bg-pink-600 text-blue-600 font-bold  font-mono" style={style} >
       Contact
      </div>
    </motion.li>
    </div>
  );
};

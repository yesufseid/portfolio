
import { motion } from "framer-motion";
import RoofingIcon from '@mui/icons-material/Roofing';
import PersonIcon from '@mui/icons-material/Person';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import SettingsIcon from '@mui/icons-material/Settings';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

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
    <div className="button z-20">
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder flex justify-center items-center  hover:bg-pink-600 " style={style}>
       <RoofingIcon className="text-sky-700" />
      </div>
      <div className="text-placeholder flex justify-center items-center text-2xl hover:bg-pink-600 text-blue-600 font-bold " style={style} >
       Home
      </div>
    </motion.li>
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder flex justify-center items-center  hover:bg-pink-600  " style={style}>
       <PersonIcon   className="text-sky-700"/>
      </div>
      <div className="text-placeholder flex justify-center items-center text-2xl hover:bg-pink-600 text-blue-600 font-bold " style={style} >
        About
      </div>
    </motion.li>
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder flex justify-center items-center  hover:bg-pink-600  z-20" style={style}>
       <TextSnippetIcon className="text-sky-700" />
      </div>
      <div className="text-placeholder flex justify-center items-center  text-2xl hover:bg-pink-600 text-blue-600 font-bold  z-20 " style={style} >
       Resume
      </div>
    </motion.li>
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder  flex justify-center items-center  hover:bg-pink-600  z-20" style={style}>
       <SettingsIcon className="text-sky-700" />
      </div>
      <div className="text-placeholder flex justify-center items-center text-2xl hover:bg-pink-600 text-blue-600 font-bold  z-20 " style={style} >
        Projects
      </div>
    </motion.li>
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder  flex justify-center items-center  hover:bg-pink-600  z-20" style={style}>
       <LocalPhoneIcon className="text-sky-700"  />
      </div>
      <div className="text-placeholder  flex justify-center items-center text-2xl hover:bg-pink-600 text-blue-600 font-bold   z-50" style={style} >
       Contact
      </div>
    </motion.li>
    </div>
  );
};

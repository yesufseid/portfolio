
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};
type Props={
 toggle:React.Dispatch<React.SetStateAction<boolean>>
}
export const Navigation = ({ toggle}:Props) => {
  return (
    <motion.ul variants={variants} className="z-10"  id="list"    >
    <MenuItem  toggle={()=>toggle(false)} />
   </motion.ul>
  )
};



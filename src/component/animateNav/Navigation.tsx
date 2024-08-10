
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
  toggle:()=>any
}
export const Navigation = ({ toggle}:Props) => (
  <motion.ul variants={variants} className="z-10"  id="list"    >
       <MenuItem  toggle={toggle()} />
  </motion.ul>
);



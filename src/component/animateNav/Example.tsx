
import { useRef,useState } from "react";
import { motion,useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(0px at 0px 0px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export const Example = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [hidden,setHidden]=useState(false)
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

const Handler=()=>{
  toggleOpen()
  setTimeout(()=>setHidden(true),3000)
}

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <div  hidden={isOpen?false:hidden} className="w-screen  fixed top-0 left-0 z-20 h-screen bg-transparent" onClick={()=>isOpen&&Handler()}  >
      <motion.div  className="background  border-r-2 rounded-r-3xl z-10   " variants={sidebar} />
       <Navigation  toggle={()=>toggleOpen()} />
       </div>
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

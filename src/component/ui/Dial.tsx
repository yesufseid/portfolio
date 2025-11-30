
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { FaPhoneFlip } from "react-icons/fa6"
import { MdSaveAlt } from "react-icons/md";
import { IoShareSocial } from "react-icons/io5";
import { MdOutlineContentCopy } from "react-icons/md";
import { useState } from 'react';


const Copy=()=>{
  navigator.clipboard.writeText("+251960417946")
}



const actions = [
  { icon: <MdOutlineContentCopy  onClick={()=>Copy()}  className='w-6 h-6' />, name: 'Copy' },
  { icon: <a href='/Seid-Yesuf-Resume.pdf'download={true} > <MdSaveAlt  className='w-6 h-6'  /></a>, name: 'Cv' },
  { icon: <a href='tel:+251960417946' ><FaPhoneFlip  className='w-6 h-6' /></a>, name: 'Call' },
  { icon: <IoShareSocial  className='w-6 h-6' />, name: 'Share' },
];

export default function BasicSpeedDial() {
  const [open,setOpen]=useState(true)
  return (
    <div className='   absolute  right-0 md:right-10 -bottom-8 md:bottom-8 z-50 '>
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 ,zIndex:2}}>
      <SpeedDial
      open={open}
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        onClick={()=>setOpen((prev)=>!prev)}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen={true}
            open={true}
        />
        ))} 
      </SpeedDial>
    </Box>
    </div>
  );
}
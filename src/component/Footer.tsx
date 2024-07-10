import BasicSpeedDial from "./ui/Dial";
import { MdOutlineCopyright } from "react-icons/md";

export default function Footer() {
  return (
    <div className=" h-10 pt-2 w-screen grid p-0 m-0 grid-cols-1 gap-2 md:grid-cols-3 justify-end border-t-2 bg-white border-slate-900 ">
       <p className="text-black capitalize flex items-center justify-center"><MdOutlineCopyright />2024 seid yesuf. all right reserved </p>
       <div className="flex gap-5 text-black capitalize justify-center items-center">
      <p>privecy police</p>
      <p>terms and codition</p>
       </div>
       <p className="capitalize text-black text-center mr-10 my-auto">Design by <span className="text-Brand1">seidyesuf</span></p>
        <div className="  md:hidden relative md:static   flex justify-center">
          <BasicSpeedDial />
        </div>
    </div>
  )
}

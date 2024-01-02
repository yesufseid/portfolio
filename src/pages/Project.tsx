import Pcard from "../component/ui/Pcard"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function Project() {
  return (
    <div className="">
    <h1 className="text-myblue font-bold title text-5xl mr-32  text-center">Projects</h1>
       <div className="grid grid-cols-3 ml-24 my-5">
             <Pcard />
             <Pcard />
             <Pcard />
       </div>
      <p className="bg-myblue rounded-full px-4 py-2 mt-20 ml-auto mr-20 w-fit  hover:text-pink-600 cursor-pointer  ">viewAll  <ArrowRightAltIcon fontSize="large" className="rounded-full bg-white ml-3" /></p>
    </div>
  )
}

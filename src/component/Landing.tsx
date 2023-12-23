import Profile from "../component/ui/Profile"
import Text,{PText} from "./ui/Text"
import { Icon } from "./ui/logo"


export default function Landing() {
  return (
    <div>
    <div className="flex py-10 my-10 mx-10 title">
        <div className="w-fit   mx-20">
           <h1 className=" font-semibold text-yellow-200 text-5xl mb-3">MRNE Stack</h1>
           <h1 className=" font-semibold text-yellow-200 text-5xl">Developer .</h1>
            <PText />
            <Text/>
        </div>
        <div className="flex justify-center items-center z-10 ml-20">
          <span  className="relative bottom-[170px] left-12 "><Icon/></span>
           <Profile />   
           <span  className="relative top-[110px]  right-[85px]"><Icon/></span> 
        </div>
    </div>
  
    </div>
  )
}

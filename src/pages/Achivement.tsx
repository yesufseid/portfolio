import {EBox} from "../component/ui/Box"
import {ABox} from "../component/ui/Box"

export default function Achivement() {
  return (
    <div className="mb-16">
    <div className="grid grid-cols-3 mx-10">
    <div className="flex justify-center ">
        <div className="mt-20">
    <h1 className="text-myblue font-bold title text-5xl mr-32  text-right">Achievements</h1>
    <p className="passage text-2xl  mt-10">I enjoy working in challenging environments where 
    I can stretch my problem-solving skills and learn from others, love sharing my 
    knowledge and working in a team. And always motivated and willing
     to learn new sets of skills.</p>
    </div>
       </div>
       <div className="col-span-2 mx-5">
       <ABox /> 
       </div>
    </div>
     
    </div>
  )
}

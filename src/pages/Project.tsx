import Pcard from "../component/ui/Pcard"

export default function Project() {
  return (
    <div className="mb-20">
    <h1 className="text-myblue font-bold title text-5xl mr-32  text-center">Projects</h1>
       <div className="grid grid-cols-3 ml-24 my-10">
             <Pcard />
             <Pcard />
             <Pcard />
       </div>
     
    </div>
  )
}

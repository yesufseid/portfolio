import { ReactNode } from "react"



type props={
    svg:ReactNode
    name:string
}
export default function Card({svg,name}:props) {
  return (
    <div
    className="w-40 h-40 rounded-lg shadow-2xl  my-5 ml-20
     shadow-black cursor-pointer hover:opacity-0.5 transition
     ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:duration-300  "
     >
         <div className="flex justify-center pt-5 ">{svg}</div>
         <p className="text-center mt-5 text-myblue font-bold title ">{name}</p>
    </div>
  )
}

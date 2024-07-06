import { ReactNode } from "react"


type Props={
  icon:ReactNode
  title:string
  text:string

}

export default function Box({icon,title,text}:Props) {
  return (
    <div className="flex w-80 h-32  rounded-xl border-0 my-2">
       <div className="w-2 h-full bg-React border-0  rounded-l-xl p-0 m-0"></div>
       <div className=" w-full h-full bg-Brand1 border-0 rounded-r-xl p-0 m-0 flex flex-col justify-center gap-2  ">
            {icon }
            <h1 className="text-center text-black font-serif font-semibold">{title}</h1>
            <code className="text-center text-black font-mono">{text}</code>
       </div>
    </div>
  )
}

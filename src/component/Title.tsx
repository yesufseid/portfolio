
type Props={
  text:string
}
export default function Title({text}:Props) {
  return (
    <div className="flex flex-col justify-center gap-0">
      <h1 className="text-3xl font-serif  font-semibold text-center text-Brand1">{text}</h1>
    <div className="flex gap-0 justify-center items-center ">
    <div className="w-2 h-2 rounded-full bg-Brand2 p-0 m-0"></div>
    <hr className={`w-[120px] m-0 h-0.5 bg-Brand2`} />
    <div className="w-2 h-2 rounded-full bg-Brand2 p-0 m-0"></div>
   </div>
   </div>
  )
}

import p1 from "/1.png"
import p2 from "/2.png"
import a1 from "/3.png"
import a2 from "/4.png"
import m1 from "/5.png"
import m2 from "/6.png"
import e1 from "/7.png"
import e2 from "/8.png"



export default function Prise() {
  return (
    <div  className="flex justify-center gap-0 items-center ">
       <img src={p1} alt="img"   className="h-80"   />
       <div className="flex flex-col gap-1 mx-0 px-0">
        <a   href={"https://price-wise-tau.vercel.app/"}  target="_blank" className={`text-Brand1 text-center
            underline  capitalize`}>veiw website</a>
        <img src={p2} alt="img" className="h-64  " />
       </div>
    </div>
  )
}
export  function Agency() {
  return (
    <div  className="flex gap-0  items-center  ">
       <img src={a1} alt="img"   className="h-80 m-0 p-0"   />
       <div className="flex flex-col gap-1  mx-0 px-0">
        <a   href={"https://agency-two-psi.vercel.app/"}  target="_blank" className={`text-Brand1 w-fit mx-auto text-center
            underline  capitalize`}>veiw website</a>
        <img src={a2} alt="img" className="h-64  " />
       </div>
    </div>
  )
}
export  function Moment() {
  return (
    <div  className="flex justify-center gap-0 items-center  transition duration-1500 ease-linear">
       <img src={m1} alt="img"   className="h-80"   />
       <div className="flex flex-col  gap-1 mx-0 px-0">
        <a   href={"https://moment-q6od.onrender.com"}  target="_blank" className={`text-Brand1 text-center
            underline  capitalize`}>veiw website</a>
        <img src={m2} alt="img" className="h-64  " />
       </div>
    </div>
  )
}
export  function Elearning() {
  return (
    <div  className="flex justify-center gap-0 items-center ">
       <img src={e1} alt="img"   className="h-80"   />
       <div className="flex flex-col gap-1  mx-0 px-0">
        <a   href={"https://learn.bluemarkcollege.com/"}  target="_blank" className={`text-Brand1 text-center
            underline  capitalize`}>veiw website</a>
        <img src={e2} alt="img" className="h-64  " />
       </div>
    </div>
  )
}
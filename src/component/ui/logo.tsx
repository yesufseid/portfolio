import image from "../../assets/s.jpg" 


export default function logo() {
  return (
    <div className='flex items-center ml-10 py-5'>
       <img src={image} alt="img"   className="w-20 h-20 rounded-full" />
       <h1 className="ml-5 text-5xl text-yellow-300 font-mono font-semibold">Seid Yesuf</h1>
    </div>
  )
}

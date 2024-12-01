import image from "../../assets/s.png" 

export default function Profile() {
  return (
        // <div className="w-[300px] h-[300px]  border-4 border-black  ">
          <img src={image} alt="img"  className="w-[300px] h-[300px] relative md:rounded-md rounded-full bottom-8 right-5 md:right-9  -z-0 shadow-2xl shadow-black "   />
        // </div>  
  )
}

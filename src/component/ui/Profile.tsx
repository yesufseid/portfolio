import image from "../../assets/s.jpg" 

export default function Profile() {
  return (
    <div>
        <div className="w-[300px] h-[300px]  border-4 border-black  ">
          <img src={image} alt="img"  className="w-[300px] h-[300px] relative bottom-8 right-5  -z-0 shadow-2xl shadow-black "   />
        </div>  
    </div>
  )
}

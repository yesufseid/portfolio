import image from "../../assets/s.jpg" 

export default function Profile() {
  return (
    <div>
        <div className="w-[300px] h-[300px]  border-4 border-white">
          <img src={image} alt="img"  className="w-[300px] h-[300px] relative bottom-8 right-5 shadow-2xl z-20 "   />
        </div>
    </div>
  )
}

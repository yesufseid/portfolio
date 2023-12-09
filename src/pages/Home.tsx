import Navbar from "../component/navbar"
import Landing from "../component/Landing"

export default function Home() {
  return (
    <div  className="h-screen w-screen bg-gradient-to-r from-myblue from-70%  to-yellow-200 to-30% ">
      <Navbar />  
      <Landing />  
    </div>
  )
}

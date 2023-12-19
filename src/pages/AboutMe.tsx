import image from "../assets/photo.jpg" 
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import CVButton from "../component/ui/CVButton";

export default function AboutMe() {
  return (
    <div className="h-screen bg-white ">
        <div className="flex md:ml-10  my-5 gap-5  items-center  w-fit ">
        <hr  className="w-3 pt-2 bg-slate-500 border-2 rounded-full border-slate-500" />
        <hr  className="w-3 pt-2 bg-slate-500 border-2 rounded-full border-slate-500" />
        <hr  className=" w-[300px] md:w-[1200px] pt-1 bg-slate-500 border-2 rounded-lg border-slate-500 " />
        </div>
          <h1 className="text-2xl py-3 text-start title ml-32 w-fit">About Me</h1>
          <div className=" md:flex  md:ml-32 mt-10 ml-7 ">
             <div className="w-[350px] h-[400px]  border-8 border-black mt-7 ">
                <img src={image} alt="img"  className="w-[350px] h-[400px] relative bottom-8 right-5  shadow-2xl shadow-black "   />
             </div> 
             <div className="ml-14">
                <h1 className="font-semibold text-xl">I'm Seid Yesuf and <span className="text-pink-500">MERN  Stack developer</span> </h1>
                <p className="mt-5 line-hight-1 ">hi! My name is <span className="text-pink-500">Seid Yesuf</span> i am aweb developer abs i am very passinate <br />
                  and dedicated to my work. with 20 years experiance as aprofessional web <br />
                  developer. I have acquired the skills and Knowlege nccessory  to make your <br /> project a success
                  </p>
                <div className="mt-5 flex">
                  <div className="mr-10">
                    <p ><CardGiftcardIcon  className="text-pink-600 my-2"/>  Birthday: <span className="ml-3"> 02/06/2002</span> </p>
                    <p> <LocationOnIcon  className="text-pink-600 my-2" />   Location:   <span className="ml-3">Addis Ababa</span> </p>
                    <p><PersonIcon  className="text-pink-600 my-2" />  study:  <span className="ml-3">AASTU</span></p>
                    <p><AttachEmailIcon  className="text-pink-600 my-2" /> Mail: <span className="ml-3">seidyesuf750@gmail.com</span></p>
                  </div>
                     <div>
                     <p ><CardGiftcardIcon  className="text-pink-600 my-2"/>  Birthday: <span className="ml-3"> 02/06/2002</span> </p>
                    <p> <LocationOnIcon  className="text-pink-600 my-2" />   Location:   <span className="ml-3">Addis Ababa</span> </p>
                    <p><PersonIcon  className="text-pink-600 my-2" />  study:  <span className="ml-3">AASTU</span></p>
                    <p><AttachEmailIcon  className="text-pink-600 my-2" /> Mail: <span className="ml-3">seidyesuf750@gmail.com</span></p>
                    <CVButton />
                     </div>
                </div>
             </div>
          </div>
    </div>
  )
}

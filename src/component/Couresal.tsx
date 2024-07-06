
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { SiPrisma } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiTsnode } from "react-icons/si";
import { FaNode } from "react-icons/fa";



const icons=[{name:"HTML",icon:<FaHtml5 className="w-14 h-14  p-3 bg-Html rounded-full mx-auto " />,color:"Html"},
  {name:"CSS",icon:<FaCss3Alt  className="w-14 h-14 p-3 bg-CSS rounded-full mx-auto " />,color:"CSS"},
  {name:"React.js",icon:<FaReact    className="w-14 h-14  p-3 bg-React rounded-full mx-auto " />,color:"React"},
  {name:"TailwindCss",icon:<RiTailwindCssFill className="w-14 h-14  p-3 bg-React rounded-full mx-auto " />},
  {name:"MongoDb",icon:<DiMongodb className="w-14 h-14 p-3 bg-React rounded-full mx-auto  " />},
  {name:"PrismaORM",icon:<SiPrisma className="w-14 h-14 p-3 bg-React rounded-full mx-auto  " />},
  {name:"JavaScript",icon:<FaNodeJs  className="w-14 h-14 p-3 bg-js rounded-full mx-auto  "/>,color:"js"},
  {name:"Express.js",icon:<SiExpress className="w-14 h-14 p-3 bg-React rounded-full mx-auto  " />},
  {name:"TypeScript",icon:<SiTsnode className="w-14 h-14 p-3 bg-React rounded-full mx-auto  " />},
  {name:"Node.js",icon:<FaNode className="w-14 h-14 p-3 bg-React rounded-full mx-auto  " />}
]


export default function SimpleSlider() {
  var settings = {
    dots:false,
    infinite: true,
    speed: 5000,
    slidesToShow:4,
    slidesToScroll:1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          dots:false,
          infinite: true,
          speed: 5000,
          slidesToShow:4,
          slidesToScroll:1,
          autoplay: true,
          autoplaySpeed: 1000,
          pauseOnHover: true,
        }
      },
    ]
  };
  return (
    <div className="w-[500px]">
    <Slider {...settings}>
       {icons.map((i)=>{
        return(
            <div className="  flex flex-col gap-5  justify-center items-center " > 
            <div>
                  {i.icon}
              </div>
                  <h1 className={`font-sans font-semibold text-lg text-center text-black  ` }>{i.name}</h1>
            </div>
        )
       })}
    </Slider>
    </div>
  );
}
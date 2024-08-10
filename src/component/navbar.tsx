import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { Example } from './animateNav/Example'


export default function navbar() {
  return (
    <div className="flex items-center w-full mt-0  ">
        <div className="flex gap-5 mt-5 items-center cursor-pointer z-30 ">
          <a  href="https://x.com/SeidYes23474319?t=Tyoo0rpza68JivkcGfymag&s=09" target="_blank"  ><FaXTwitter   className="h-8 w-8 md:ml-32 ml-2 " /></a>
          <a href="https://github.com/yesufseid" target="_blank"  ><FaGithub className="h-8 w-8  " /></a>
          <a href="Seya👨‍💻 #, [7/10/2024 9:37 PM]
   https://x.com/SeidYes23474319?t=Tyoo0rpza68JivkcGfymag&s=09Seya👨‍💻 #, [7/10/2024 9:41 PM]
   https://www.linkedin.com/in/seid-yesuf-742a11264?utm_
    source=share&utm_campaign=share_via&utm_content=profile&utm_
    medium=android_app" target="_blank"  ><FaLinkedin className="h-8 w-8" /></a>  
        </div>
        <Example />
    </div>
  )
}

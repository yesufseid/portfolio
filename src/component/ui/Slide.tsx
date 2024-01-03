import Svg from "../../assets/account-avatar-profile-user-9-svgrepo-com.svg"

export default function Slide() {
  return (
    <div className="relative bg-white h-56 border-4 rounded-full mt-20 ">
        <img src={Svg} alt="svg"   className="w-32 h-32 rounded-full absolute bottom-40 left-[350px] " />
        <div className="text-center mt-16 " >
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                 Nihil rem sequi, culpa beatae quis,
                 quas voluptates aut delectus iusto <br />
                 sit voluptatum obcaecati optio dicta et repellendus ea hic, quaerat ullam!</p>
                  <h1>SEID YESUF</h1>
                  <p>client</p>
        </div>

    </div>
  )
}

import MyComponent from "../component/ui/Coursal"

export default function Testimonial() {
  return (
    <div className="bg-myblue py-10 rounded-xl px-5 ">
        <h1 className=" font-bold title text-5xl mr-32  text-center py-10">Testimonials</h1>
        <div className="mx-32">
         <MyComponent />
        </div>
    </div>
  )
}

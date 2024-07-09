import styled from 'styled-components'
import Title from '../component/Title';
import Arrow from '../component/Arrow';
import Slider from "react-slick";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Prise,{Agency,Moment,Elearning} from '../component/Sliders';





const Section=styled.div`
@media only screen and (min-width: 600px) {
 height:100vh;
 scroll-snap-align:center;
}
/* background-image:url("/bg.jpg") */
`
 function SampleNextArrow(props:any) {
  const {onClick } = props;
  return (
    <IoIosArrowForward   onClick={onClick}
     className='w-14 h-14 cursor-pointer absolute top-36 -right-20 bg-Gray rounded-full hidden md:flex ' />
  );
}

function SamplePrevArrow(props:any) {
  const {onClick } = props;
  return (
    <IoIosArrowBack onClick={onClick}  
    className='w-14 h-14 cursor-pointer absolute top-36 -left-32  bg-Gray rounded-full hidden md:flex ' />
  );
}

export default function Works(){
var settings = {
  dots:false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint:600,
      settings: {
        slidesToShow:1,
        slidesToScroll:1,
        infinite: true,
        dots:false,
        swipeToSlide: true,
      }
}]
};
  return(
    <Section>
        <div  id='works' className='flex justify-center '>
       <Arrow />
      </div>
      <Title text='Works' />  
      <p className='capitalize text-center text-black font-mono font-thin my-3'>
        i had the pleasure of working with this awesome projects</p>
       <div className="md:w-[700px] md:mx-auto mt-10  relative my-10 ">
      <Slider {...settings}>
        <Agency />
        <Moment />
        <Prise />
        <Elearning />
      </Slider>
    </div>
    </Section>
  )
}
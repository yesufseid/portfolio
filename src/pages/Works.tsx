import styled from 'styled-components'
import Title from '../component/Title';
import Arrow from '../component/Arrow';
import Slider from "react-slick";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";




const Section=styled.div`
@media only screen and (min-width: 600px) {
 height:100vh;
 scroll-snap-align:center;
}
/* background-image:url("/bg.jpg") */
`

export default function Works(){
  var settings = {
    dots:false,
    infinite:true,
    speed: 500,
    slidesToShow:1,
    slidesToScroll: 1,
    initialSlide: 0,
    Arrow:true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      }
    ]
  };

  return(
    <Section>
        <div className='flex justify-center '>
       <Arrow />
      </div>
      <Title text='Works' />  
      <p className='capitalize text-center text-black font-mono font-thin my-3'>
        i had the pleasure of working with this awesome projects</p>
        <div className='md:w-[700px] md:mx-auto mt-10  relative '>
        <IoIosArrowForward className='w-14 h-14 text-Brand2 absolute top-36 -right-10 ' />
        <Slider {...settings}>
          {[1,2,3].map((p)=>{
            return(
              <h1 className='h-80 '>{p}</h1>
            )
          })}
      </Slider>
      <IoIosArrowBack  className='w-14 h-14 absolute top-36 -left-10  rounded-full ' />
      </div>
    </Section>
  )
}
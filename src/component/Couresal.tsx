
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
       {[1,2,3,4,5].map(()=>{
        return(
            <div className="w-80 h-32 bg-myblue">
            <h3 >1</h3>
          </div>
        )
       })}
    </Slider>
  );
}
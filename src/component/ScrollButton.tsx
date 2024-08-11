import {useState,useEffect} from 'react';  
import { IoIosArrowUp } from "react-icons/io";

const ScrollButton = () =>{ 

const [visible, setVisible] = useState(false) 

useEffect(()=>{
	window.addEventListener('scroll', toggleVisible); 
},[])



const toggleVisible = () => { 
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){ 
		scrolled > 2500?setVisible(false):setVisible(true) 
	} else if (scrolled <= 300){ 
	setVisible(false) 
	}
}; 

const scrollToTop = () =>{ 
	window.scrollTo({ 
	top:0, 
	behavior: 'smooth'
	}); 
}; 
return ( 
	<IoIosArrowUp  onClick={scrollToTop} className='bg-black rounded-full text-white  cursor-pointer fixed  right-8 bottom-20 w-10 h-10 '
	style={{display: visible ? 'inline' : 'none'}} /> 
); 
} 

export default ScrollButton; 

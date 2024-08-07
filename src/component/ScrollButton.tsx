import {useState} from 'react'; 
import { Button } from './Styles'; 
import { IoIosArrowUp } from "react-icons/io";

const ScrollButton = () =>{ 

const [visible, setVisible] = useState(false) 

const toggleVisible = () => { 
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300 && scrolled < 2840){ 
	setVisible(true) 
	} 
	else if (scrolled <= 300){ 
	setVisible(false) 
	}else if(scrolled > 2840){
		setVisible(false)
	}
}; 

const scrollToTop = () =>{ 
	window.scrollTo({ 
	top: 0, 
	behavior: 'smooth'
	}); 
}; 

window.addEventListener('scroll', toggleVisible); 

return ( 
	<Button> 
	<IoIosArrowUp onClick={scrollToTop} className='bg-black rounded-full text-white'
	style={{display: visible ? 'inline' : 'none'}} /> 
	</Button> 
); 
} 

export default ScrollButton; 

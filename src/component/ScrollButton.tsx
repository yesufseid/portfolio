import {useState} from 'react'; 
import { Button } from './Styles'; 
import { IoIosArrowUp } from "react-icons/io";

const ScrollButton = () =>{ 

const [visible, setVisible] = useState(false) 

const toggleVisible = () => { 
	const scrolled = document.documentElement.scrollTop; 
	if (scrolled > 300){ 
	setVisible(true) 
	} 
	else if (scrolled <= 300){ 
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
	<IoIosArrowUp onClick={scrollToTop}
	style={{display: visible ? 'inline' : 'none'}} /> 
	</Button> 
); 
} 

export default ScrollButton; 

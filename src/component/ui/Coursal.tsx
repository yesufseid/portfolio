import * as React from 'react';
import { useTheme ,createTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Slide from './Slide';
import {makeStyles} from '@material-ui/core';


 
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


const images=[1,2,3,4,5]
const useStyles = makeStyles({
  root: {
    backgroundColor:"violet"
  },
});


function SwipeableTextMobileStepper() {
  const classes =useStyles()
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = 5;
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };
  // sx={{ maxWidth: 400, flexGrow: 1 }}
  return (
    <div className='flex gap-10 justify-center items-center' >
        <Button className='border-2 border-pink-600'
        sx={{
          border:2,
          paddingInline:4,
        }}
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
    <Box>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((index) => (
          <div >
            {Math.abs(activeStep - index) <= 2 ? (
              <Slide />
            ) : null}
            
          </div>
        ))}
      </AutoPlaySwipeableViews>
        <div className='w-30 bg-myblue flex justify-center py-2 '>
      <MobileStepper 
        sx={{
          backgroundColor:'transparent',
          color: 'success.main',
          width: 30,
        }}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        backButton={
          <p></p>
        }
        nextButton={
          <p></p>
        }
      />
      </div>
    </Box>
    <Button
        sx={{
          border:2,
          paddingInline:4,
        }}
    
    size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
    </div>
  );
}

export default SwipeableTextMobileStepper;
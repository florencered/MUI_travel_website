import React from 'react';
import Container from '@mui/material/Container';
import { BottomNavigation, Typography } from '@mui/material';
import { Box } from '@mui/system';
import ImageCollage from '../components/ImageCollage'; 
import CustomizedAccordions from '../components/Accordian';
import BottomNavigationAction from '../components/BottomNavigation';
// import Accordion from '../components/Accordian'; ,the function name for default is idff but should work
const Tour = () => {
  return (
    <Container sx={{
       width:900 
    }}> 
    <Typography variant="h4" component="h6" marginTop={3}>Explore the World-Visit Las Vegas!!</Typography>
    {/*concept of image collage wrapped in a diff div*/} 
    <Box marginTop={3} sx={{display:"flex"}}>
        <img src="https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFzJTIwdmVnYXN8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60" alt="image of las vegas" height={325}/> 
        <ImageCollage/>
    </Box> 
    <Box>
        <Typography variant="h6" component="h5" marginTop={3} >About this ticket</Typography> 
        <Typography variant="paragraph" component="p" marginTop={3}> 
        Whores in this house.
There's some whores in this house (hol' up)
I said certified freak, seven days a week
Wet ass pussy, make that pullout game weak, woo! (Ah)
Yeah, yeah, yeah, yeah
Yeah, you fucking with some wet ass pussy
Bring a bucket and a mop for this wet ass pussy
Give me everything you got for this wet ass pussy
Beat it up, nigga, catch a charge
Extra large, and extra hard
Put this pussy right in yo' face
Swipe your nose like a credit card
Hop on top, I want a ride
I do a kegel while it's inside
Spit in my mouth, look at my eyes
This pussy is wet, come take a dive.
            </Typography> 
    </Box> 
    <Box> 
    <Typography variant="h6" component="h5" marginTop={3} marginBottom={2}>Frequently Asked Questions</Typography> 
    <CustomizedAccordions/>

    </Box>
    <Box>
            <BottomNavigationAction/>
    </Box>
    </Container>
  )
}

export default Tour
import React from 'react'; 
import Container from '@mui/material/Container';
import TourCard from '../components/TourCard';
import Grid from '@mui/material/Grid';

import data from "../Data.json"
import { Typography } from '@mui/material';

const Home = () => {
  return ( 
    <div className="App">

    <Container sx={{marginY:5}}> 
    
        {data.Cities.map((city,index)=>( 
          <div key={index}>
            
          <Typography 
          variant="h4"
          component="h2" 
          marginTop={5} 
          marginBottom={3}
          >Top {city.name} Tours</Typography>

        
        <Grid container spacing={2}>
          {city.tours.map((tour,index)=>(<TourCard tour={tour} key={index}/>))}
        </Grid>

        </div> 
))}

    

    </Container> {/* used to center the content horizontally */}

  </div>
);
}

  

export default Home
import React from 'react';
import Paper from '@mui/material/Paper'; //similar to card in bootstrap
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { AccessTime } from '@mui/icons-material';
import Rating from '@mui/material/Rating';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';



// customise style according to personal preference
const theme = createTheme({   
        typography: {
            body3:{
                fontSize:15
            }


        }
   
});

const TourCard = ({tour}) => { 
    const {image,name,duration,rating,numberOfReviews,price}=tour;
    return (
        <ThemeProvider theme={theme}>
            <Grid item xs={3}>

                <Paper elevation={3}>
                    <img src={`${image}`} alt="waterfalls surrounded by lustrous green rocks" className='img'></img>
                    <Box paddingX={1}>
                        <Typography variant="subtitle2" component="h2">
                           {name}
                        </Typography>
                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: 2


                        }}

                        >
                            <AccessTime sx={{ width: 13.5, color: "#1c39bb", fontWeight: "400" }} />

                            <Typography variant='body2' component="p" marginLeft={0.5}>{duration} Hours</Typography>

                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", marginTop: 1 }}>
                            <Rating name="read-only" value={rating} precision={0.5} size="small" readOnly />
                            <Typography variant='body2' component="p" marginLeft={0.5}>{rating}</Typography>
                            <Typography variant='body3' component="p" marginLeft={1.5}>({numberOfReviews} reviews) </Typography>
                        </Box>
                        <Box>
                            <Typography variant='h6' component="h3" marginTop={0}>For 12,00K/-</Typography>
                        </Box>
                    </Box>

                </Paper>

            </Grid>
         </ThemeProvider>


    )
}

export default TourCard
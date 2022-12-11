import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>What are the lyrics of WAP?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Tie me up like I'm surprised
Let's role-play, I wear a disguise
I want you to park that big Mack truck right in this little garage
Make it cream, make me scream
Out in public, make a scene
I don't cook, I don't clean
But let me tell you, I got this ring (ayy, ayy)
Gobble me, swallow me, drip down the side of me (yeah)
Quick, jump out 'fore you let it get inside of me (yeah)
I tell him where to put it, never tell him where I'm 'bout to be
I run down on him 'fore I have a nigga running me
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Sounds more like BDSM lmao</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Talk yo' shit, bite your lip
Ask for a car while you ride that dick (while you ride that dick)
You ain't never gotta fuck him for a thing
He already made his mind up 'fore he came
Now get your boots and your coat for this wet ass pussy
He bought a phone just for pictures of this wet ass pussy
Pay my tuition just to kiss me on this wet ass pussy
Now make it rain if you wanna see some wet ass pussy
Look, I need a hard hitter, I need a deep stroke
I need a Henny drink, I need a weed smoker
Not a garden snake, I need a king cobra
With a hook in it, hope it lean over
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Tell me more!I am interested</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          He got some money, then that's where I'm headed
Pussy A-1, just like his credit
He got a beard, well, I'm tryna wet it
I let him taste it, and now he diabetic
I don't wanna spit, I wanna gulp
I wanna gag, I wanna choke
I want you to touch that lil' dangly thing that swing in the back of my throat
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
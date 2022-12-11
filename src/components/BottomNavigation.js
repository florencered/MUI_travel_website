import React from 'react'; 
import { Paper } from '@mui/material'; 
import Box from '@mui/material/Box'; 
import BottomNavigation from '@mui/material/BottomNavigation';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import BasicModal from './Modal';

const BottomNavigationAction = () => {
  return (
    <div>
         <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
         
          
         
        ><BasicModal/>
        
        </BottomNavigation>
      </Paper>
    </div>
  )
}

export default BottomNavigationAction
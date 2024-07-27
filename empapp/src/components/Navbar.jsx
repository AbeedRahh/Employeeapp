import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import WorkIcon from '@mui/icons-material/Work';

const Navbar = () => {
  return (
    <div>
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Employee App
            <AccountBalanceWalletIcon style={{fontSize:"40px"}}></AccountBalanceWalletIcon>
          </Typography>
        <Button variant='contained'>
        <Link to ={'/'}>Add</Link> 
         <WorkIcon style={{fontSize:"40px"}}></WorkIcon> </Button>
        <Button variant='contained'>
        <Link to ={'/v'}>View</Link> </Button>
        
        </Toolbar>
      </AppBar>
    </Box> 
    </div>
  )
}

export default Navbar

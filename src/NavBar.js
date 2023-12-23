// src/NavBar.js
import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { connectWallet } from './WalletConnect';
import MyComponent from './MyComp';


const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
        <Button color="inherit" onClick={connectWallet}>
          Connect
        </Button>
        <MyComponent />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;



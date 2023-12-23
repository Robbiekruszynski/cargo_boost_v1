// src/Dashboard.js
import React from 'react';
import NavBar from './NavBar';
import { Box, Container } from '@mui/material';
import { Grid } from '@mui/material';
import DashboardCard from './DashboardCard';


const Dashboard = () => {

    const cardsData = [
        {
          title: "Card 1",
          imageUrl: "/path-to-your-image.jpg",
          buttonText: "Button 1",
          dropdownOptions: ["Option 1", "Option 2", "Option 3"]
        },
        // ... Add data for other cards
      ];
 
  return (
    <Box sx={{ flexGrow: 1 }}>
    <NavBar />
    <Container>
       <Grid container spacing={2}>
      {cardsData.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <DashboardCard {...card} />
        </Grid>
      ))}
    </Grid>
      {/* Your dashboard content goes here */}
      <h1>
        test
      </h1>
    </Container>
  </Box>
   
  );
};

export default Dashboard;

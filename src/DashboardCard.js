// src/components/DashboardCard.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Select, MenuItem } from '@mui/material';

const DashboardCard = ({ title, imageUrl, buttonText, dropdownOptions }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={imageUrl}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Select
          defaultValue=""
          displayEmpty
        >
          {dropdownOptions.map((option, index) => (
            <MenuItem key={index} value={option}>{option}</MenuItem>
          ))}
        </Select>
        <Button variant="contained">{buttonText}</Button>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;

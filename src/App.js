// src/App.js
import React from 'react';
import { Buffer } from 'buffer';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import theme from './Theme';
import Dashboard from './Dashboard';
import MyComponent from './MyComp';

function App() {
  return (
    <ThemeProvider theme={theme}>
       <Router>
      <Routes>
        <Route path="/connect-wallet" component={MyComponent} />
        {/* other routes */}
      </Routes>
    </Router>
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;


import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Header = ({ onThemeChange }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'rgba(173, 216, 230, 0.5)' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Targetometer
        </Typography>
        <Box>
          <Button color="inherit" onClick={() => onThemeChange('light')}>Light</Button>
          <Button color="inherit" onClick={() => onThemeChange('dark')}>Dark</Button>
          <Button color="inherit" onClick={() => onThemeChange('cvd')}>CVD</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

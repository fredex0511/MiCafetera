import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '/favicon.png'; // Asegúrate de tener el logo en esta ruta

const Navbar: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'rgba(111, 78, 55, 0.51)', height: '65px', display: 'flex', justifyContent: 'center' }}>
      <Toolbar>
        <img src={logo} alt="Logo" style={{ height: '50px', marginRight: '10px' }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Mi Cafetera
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">Inicio</Button>
          <Button color="inherit" component={Link} to="/about">Nosotros</Button>
          <Button color="inherit" component={Link} to="/coffee-types">Tipos de Café</Button>
          <Button color="inherit" component={Link} to="/contact">Contáctanos</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
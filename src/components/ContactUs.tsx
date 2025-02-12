import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const ContactUs: React.FC = () => {
  return (
    <Container 
      maxWidth="lg" 
      sx={{ 
        minHeight: '80vh', 
        minWidth: '100vw',
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#f5f5f5',
        color: '#2D1E16',
        textAlign: 'center',
        p: 3
      }}
    >
      <Typography 
        variant="h2" 
        gutterBottom 
        sx={{ fontWeight: 'bold', color: '#6f4e37', fontFamily: 'Georgia, serif', marginTop: '20px' }}
      >
        Contáctanos
      </Typography>
      <Typography 
        variant="body1" 
        paragraph 
        sx={{ color: '#757575', maxWidth: '800px', marginBottom: '40px' }}
      >
        Si tienes alguna pregunta o comentario, no dudes en ponerte en contacto con nosotros. Estamos aquí para ayudarte.
      </Typography>
      <Box 
        component="form" 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          width: '100%', 
          maxWidth: '600px' 
        }}
      >
        <TextField 
          label="Nombre" 
          variant="outlined" 
          fullWidth 
          sx={{ marginBottom: '20px' }} 
        />
        <TextField 
          label="Correo Electrónico" 
          variant="outlined" 
          fullWidth 
          sx={{ marginBottom: '20px' }} 
        />
        <TextField 
          label="Mensaje" 
          variant="outlined" 
          fullWidth 
          multiline 
          rows={4} 
          sx={{ marginBottom: '20px' }} 
        />
        <Button 
          variant="contained" 
          color="primary" 
          sx={{ backgroundColor: '#6f4e37', '&:hover': { backgroundColor: '#5a3b2e' } }}
        >
          Enviar
        </Button>
      </Box>
    </Container>
  );
};

export default ContactUs;
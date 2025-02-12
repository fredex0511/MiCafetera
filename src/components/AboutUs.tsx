import React from 'react';
import { Container, Typography, Card, CardContent, Grid } from '@mui/material';

const AboutUs: React.FC = () => {
  return (
    <Container 
      maxWidth="lg" 
      sx={{ 
        minHeight: '90vh', 
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
        Sobre Nosotros
      </Typography>
      <Typography 
        variant="body1" 
        paragraph 
        sx={{ color: '#757575', maxWidth: '800px', marginBottom: '40px' }}
      >
        En Mi Cafetera, nos apasiona el café. Desde nuestros humildes comienzos, hemos trabajado arduamente para ofrecer a nuestros clientes la mejor experiencia de café posible. Creemos que cada taza de café debe ser una obra de arte, y nos esforzamos por hacer que cada sorbo sea memorable.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: '#ffffff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom sx={{ color: '#6f4e37', fontWeight: 'bold' }}>
                Nuestra Misión
              </Typography>
              <Typography variant="body2" sx={{ color: '#757575' }}>
                Proveer a nuestros clientes con café de la más alta calidad, cultivado de manera sostenible y preparado con pasión y dedicación.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: '#ffffff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom sx={{ color: '#6f4e37', fontWeight: 'bold' }}>
                Nuestra Visión
              </Typography>
              <Typography variant="body2" sx={{ color: '#757575' }}>
                Ser reconocidos como líderes en la industria del café, innovando constantemente y ofreciendo productos y servicios que superen las expectativas de nuestros clientes.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: '#ffffff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom sx={{ color: '#6f4e37', fontWeight: 'bold' }}>
                Nuestros Valores
              </Typography>
              <Typography variant="body2" sx={{ color: '#757575' }}>
                Calidad, Sostenibilidad, Innovación, Pasión y Compromiso con nuestros clientes y la comunidad.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
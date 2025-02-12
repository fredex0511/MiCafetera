import React from 'react';
import { Container, Typography, Card, CardContent, Grid } from '@mui/material';

const CoffeeTypes: React.FC = () => {
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
        Tipos de Café
      </Typography>
      <Typography 
        variant="body1" 
        paragraph 
        sx={{ color: '#757575', maxWidth: '800px', marginBottom: '40px' }}
      >
        Descubre los diferentes tipos de café que ofrecemos. Cada uno tiene su propio sabor y características únicas.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: '#ffffff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom sx={{ color: '#6f4e37', fontWeight: 'bold' }}>
                Arábica
              </Typography>
              <Typography variant="body2" sx={{ color: '#757575' }}>
                Conocido por su sabor suave y aromático, el café Arábica es el más popular y representa aproximadamente el 60% de la producción mundial de café.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: '#ffffff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom sx={{ color: '#6f4e37', fontWeight: 'bold' }}>
                Liberica
              </Typography>
              <Typography variant="body2" sx={{ color: '#757575' }}>
                El café Liberica tiene un sabor único y afrutado, con un aroma floral. Es menos común y se cultiva principalmente en Filipinas y Malasia.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: '#ffffff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom sx={{ color: '#6f4e37', fontWeight: 'bold' }}>
                Robusta
              </Typography>
              <Typography variant="body2" sx={{ color: '#757575' }}>
                Con un sabor fuerte y amargo, el café Robusta tiene el doble de cafeína que el Arábica. Es ideal para los amantes del café intenso.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: '#ffffff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom sx={{ color: '#6f4e37', fontWeight: 'bold' }}>
                Excelsa
              </Typography>
              <Typography variant="body2" sx={{ color: '#757575' }}>
                El café Excelsa tiene un sabor afrutado y ácido, y se utiliza a menudo en mezclas para dar profundidad y complejidad al perfil de sabor.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CoffeeTypes;
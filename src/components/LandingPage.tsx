import React from "react";
import { Typography, Container, Box } from "@mui/material";
import { motion } from "framer-motion";

const LandingPage: React.FC = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: "90vh",
        minWidth: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "url(/pixelcut-export.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#ffffff",
        color: "#ffffff",
        textAlign: "center",
        p: 3,
        position: "relative",
        pt: 10, 
      }}
    >
      <Box
        sx={{
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          color: "#ffffff",
          padding: "10px 0",
          position: "absolute",
          top: 0,
          left: 0,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{ fontWeight: "bold", fontFamily: "Georgia, serif" }}
        >
          Mi cafetera
        </Typography>
      </Box>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ marginTop: "80px" }} // Ajuste del margen para evitar superposición
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#6f4e37",
            fontFamily: "Georgia, serif",
            textShadow: "2px 2px 4px rgba(0,0,0,0.7)", // Mejor contraste
          }}
        >
          Descubre la Cafetera Perfecta
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            color: "#6f4e37",
            fontStyle: "italic",
            textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
          }}
        >
          "El mejor café para los mejores momentos"
        </Typography>
      </motion.div>
    </Container>
  );
};

export default LandingPage;

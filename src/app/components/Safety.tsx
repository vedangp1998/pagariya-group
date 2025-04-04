"use client";

import {
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Box,
} from "@mui/material";

const products = [
  {
    title: "Full-body harnesses",
    image: "/images/harness.jpg",
  },
  {
    title: "Industrial safety helmets",
    image: "/images/helmet.jpg",
  },
  {
    title: "Safety shoes",
    image: "/images/shoes.jpg",
  },
  {
    title: "Reflective jackets",
    image: "/images/jacket.jpg",
  },
];

const SafetySolutions = () => {
  return (
    <Container sx={{ py: 6, textAlign: "center" }}>
      <Box>
        <Typography
          sx={{ fontSize: "32px", fontWeight: 600, color: "black" }}
          gutterBottom
        >
          COMPREHENSIVE SAFETY SOLUTIONS
        </Typography>
        <Box
          sx={{
            width: "45px",
            height: "2.5px",
            backgroundColor: "#FF6F00",
            margin: "12px auto",
          }}
        />
        <Typography sx={{ fontSize: "18px", color: "black" }} gutterBottom>
          We offer a wide range of high-quality PPE, including:
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center" sx={{ mt: 3 }}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                border: "1px solid #FF6F00",
                borderRadius: 2,
                boxShadow: 2,
              }}
            >
              <CardMedia
                component="img"
                image={product.image}
                alt={product.title}
                sx={{ height: 220, objectFit: "contain", p: 2 }}
              />
              <CardContent>
                <Typography variant="body1" fontWeight="500">
                  {product.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SafetySolutions;

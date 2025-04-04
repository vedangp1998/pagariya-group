"use client";
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionCard = motion(Card);
const MotionMedia = motion(CardMedia, { forwardMotionProps: true });
const MotionTypography = motion(Typography);

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

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const SafetySolutions = () => {
  return (
    <MotionBox
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Container sx={{ py: 6, textAlign: "center" }}>
        <MotionTypography
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          sx={{ fontSize: "32px", fontWeight: 600, color: "black" }}
          gutterBottom
        >
          COMPREHENSIVE SAFETY SOLUTIONS
        </MotionTypography>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          style={{
            transformOrigin: "center",
            backgroundColor: "#FF6F00",
            width: "45px",
            height: "2.5px",
            margin: "12px auto",
          }}
        />

        <MotionTypography
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          sx={{ fontSize: "14px", color: "black" }}
          gutterBottom
        >
          We offer a wide range of high-quality PPE, including:
        </MotionTypography>

        <Box
          sx={{
            mt: 4,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
          }}
        >
          {products.map((product, index) => (
            <MotionBox
              key={index}
              variants={cardVariants}
              whileHover="hover"
              initial="rest"
              animate="rest"
              sx={{
                width: { xs: "100%", sm: "45%", md: "22%" },
                display: "flex",
                justifyContent: "center",
              }}
            >
              <MotionCard
                variants={{
                  rest: { scale: 1, boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
                  hover: {
                    scale: 1.03,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                    transition: { duration: 0.3 },
                  },
                }}
                sx={{
                  width: "100%",
                  border: "1px solid #FF6F00",
                  borderRadius: 2,
                  overflow: "hidden",
                  backgroundColor: "#fff",
                }}
              >
                <MotionMedia
                  component="img"
                  sx={{
                    height: 220,
                    objectFit: "contain",
                    p: 2,
                    transition: "transform 0.4s ease",
                  }}
                  image={product.image}
                  alt={product.title}
                  variants={{
                    rest: { scale: 1 },
                    hover: {
                      scale: 1.05,
                      transition: { duration: 0.4, ease: "easeOut" },
                    },
                  }}
                />
                <CardContent>
                  <MotionTypography
                    variant="body1"
                    fontWeight="500"
                    sx={{ position: "relative", display: "inline-block" }}
                    variants={{
                      rest: { color: "black" },
                      hover: {
                        color: "#FF6F00",
                        transition: { duration: 0.3 },
                      },
                    }}
                  >
                    {product.title}
                    <motion.span
                      variants={{
                        rest: { width: 0 },
                        hover: { width: "100%" },
                      }}
                      style={{
                        height: "2px",
                        display: "block",
                        backgroundColor: "#FF6F00",
                        position: "absolute",
                        bottom: -2,
                        left: 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </MotionTypography>
                </CardContent>
              </MotionCard>
            </MotionBox>
          ))}
        </Box>
      </Container>
    </MotionBox>
  );
};

export default SafetySolutions;

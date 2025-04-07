"use client";
import Image1 from "../../../assets/img/product/harness.png";
import Image2 from "../../../assets/img/product/helmet.png";
import Image3 from "../../../assets/img/product/shoes.png";
import Image4 from "../../../assets/img/product/reflective-jacket.png";

import {
  Container,
  Typography,
  Card,
  // CardMedia,
  CardContent,
  // CardMediaProps
  Box,
} from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionCard = motion(Card);
// const MotionMedia = motion<CardMediaProps>(CardMedia);
const MotionTypography = motion(Typography);

const products = [
  {
    title: "Full-body harnesses",
    image: Image1.src,
  },
  {
    title: "Industrial safety helmets",
    image: Image2.src,
  },
  {
    title: "Safety shoes",
    image: Image3.src,
  },
  {
    title: "Reflective jackets",
    image: Image4.src,
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
      <Container sx={{ pt: 6, marginBottom: 12, textAlign: "center" }}>
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
                width: { xs: "100%", sm: "80%", md: "30%" }, // increased card width
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
                  p: 2, // consistent padding inside card
                }}
              >
                <motion.img
                  style={{
                    height: 420, // increased from 320
                    width: "100%",
                    objectFit: "contain",
                    padding: "16px",
                    transition: "transform 0.4s ease",
                  }}
                  src={product.image}
                  alt={product.title}
                  variants={{
                    rest: { scale: 1 },
                    hover: {
                      scale: 1.05,
                      transition: { duration: 0.4, ease: "easeOut" },
                    },
                  }}
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <MotionTypography
                    variant="h6"
                    fontWeight="600"
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

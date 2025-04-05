"use client";
import { Container, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const MotionTypography = motion(Typography);

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
  },
};

const WhyChooseUs = () => {
  return (
    <MotionBox
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Container sx={{ py: 2, textAlign: "center" }}>
        <MotionTypography
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          sx={{ fontSize: "32px", fontWeight: 600, color: "black" }}
          gutterBottom
        >
          WHY CHOOSE US?
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
          sx={{ fontSize: "15px", color: "black" }}
          gutterBottom
        >
          Decades of trust: Over 70 years of industry leadership. Certified
          excellence: BIS, ISO, FDA, NABL-accredited quality standards.
          Unmatched logistics: Fleet of 700+ commercial vehicles for safe,
          timely deliveries. Customer-centric: 24/7 support, strong supplier
          relations, transparent business ethics.
        </MotionTypography>
      </Container>
    </MotionBox>
  );
};

export default WhyChooseUs;

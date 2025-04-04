"use client";
import { Box, Typography, Container } from "@mui/material";
import Image from "next/image";
import WorkingImage from "../assets/img/working-4.jpg";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

const AnimatedText = ({ text }: { text: string }) => {
  return (
    <Typography
      component="h2"
      sx={{
        fontSize: { xs: "20px", sm: "24px" },
        fontWeight: 600,
        textAlign: { xs: "center", md: "left" },
        display: "flex",
        flexWrap: "wrap",
        gap: "4px",
        cursor: "pointer",
      }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          whileHover={{
            y: [-2, 2, -1, 1, 0],
            rotate: [0, 2, -2, 1, 0],
            transition: {
              duration: 0.4,
              ease: "easeInOut",
              delay: index * 0.015,
            },
          }}
          style={{ display: "inline-block" }}
        >
          {char}
        </motion.span>
      ))}
    </Typography>
  );
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const floatImage = {
  hidden: { opacity: 0, scale: 0.9, rotate: -4 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const skewBlock = {
  hidden: { opacity: 0, y: 80, skewY: -5 },
  visible: {
    opacity: 1,
    y: 0,
    skewY: -3,
    transition: { duration: 1, ease: [0.6, -0.05, 0.01, 0.99] },
  },
};

const Welcome = () => {
  const skewRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: skewRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const textY = useTransform(scrollYProgress, [0, 1], [40, -20]);
  const scaleGlow = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-around",
          alignItems: "center",
          px: { xs: 2, sm: 4, md: 8 },
          py: { xs: 4, md: 8 },
          gap: { xs: 6, md: 12 },
          maxWidth: "lg",
          mx: "auto",
        }}
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          style={{ maxWidth: "600px", textAlign: "left" }}
        >
          <AnimatedText text="WELCOME TO UTEX INDUSTRIES" />
          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "16px" },
              mt: 1,
              textAlign: { xs: "center", md: "left" },
              color: "#444",
            }}
          >
            It stands as a leading manufacturer and supplier of industrial and
            personal protective equipment (PPE). With an advanced
            technology-driven manufacturing setup, we specialize in customized
            fall protection solutions designed to meet the diverse safety needs
            of industries worldwide.
          </Typography>
        </motion.div>

        <motion.div
          variants={floatImage}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          style={{
            width: "100%",
            maxWidth: "600px",
            minWidth: "300px",
            margin: "0 auto",
          }}
        >
          <Image
            src={WorkingImage}
            alt="Working"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "12px",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
            }}
          />
        </motion.div>
      </Box>
      <motion.div
        ref={skewRef}
        style={{ y: bgY }}
        variants={skewBlock}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <Box
          sx={{
            backgroundColor: "#E66234",
            transform: "skewY(-3deg)",
            py: { xs: 6, md: 16 },
            px: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            my: { xs: 8, md: 14 },
          }}
        >
          <Container
            sx={{
              transform: "skewY(3deg)",
              textAlign: "left",
              maxWidth: "md",
              position: "relative",
            }}
          >
            {/* Glow pulse with scroll */}
            <motion.div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100px",
                background:
                  "radial-gradient(circle at 10% 40%, rgba(255,255,255,0.3), transparent)",
                zIndex: 0,
                filter: "blur(12px)",
                scale: scaleGlow,
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />

            <motion.div
              style={{ y: textY, position: "relative", zIndex: 2 }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "24px", md: "32px" },
                  color: "black",
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                Commitment to Excellence
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "16px", md: "20px" },
                  color: "black",
                }}
              >
                Our unwavering dedication to safety and quality has earned us
                the ISO 14001-2015 certification, reinforcing our commitment to
                environmentally responsible manufacturing.
              </Typography>
            </motion.div>
          </Container>
        </Box>
      </motion.div>
      ;
    </>
  );
};

export default Welcome;

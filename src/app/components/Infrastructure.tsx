"use client";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

const skewBlock = {
  hidden: { opacity: 0, y: 80, skewY: -5 },
  visible: {
    opacity: 1,
    y: 0,
    skewY: -3,
    transition: { duration: 1, ease: [0.6, -0.05, 0.01, 0.99] },
  },
};

const boxVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Infrastructure = () => {
  const skewRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: skewRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const scaleGlow = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const contentData = [
    "34-acre food processing and manufacturing unit in Nagpur",
    "State-of-the-art production facilities for industrial safety gear, food products, and precast solutions.",
    "Advanced Export Order (AEO) plant for non-Basmati rice export, certified by USDA.",
    "Real estate projects, including commercial developments and luxury resorts.",
    "Mining operations with 5+ stone crushing units, including a 250 TPH facility in Central India.",
  ];

  return (
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
          py: { xs: 6, md: 12 },
          px: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          my: { xs: 8, md: 8 },
        }}
      >
        <Container
          sx={{
            transform: "skewY(3deg)",
            maxWidth: "lg",
            position: "relative",
            textAlign: "center",
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
              zIndex: 0,
              filter: "blur(12px)",
              scale: scaleGlow,
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />

          <Box
            sx={{
              //   transform: "skewY(-3deg)",
              position: "relative",
              zIndex: 2,
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 600,
                color: "white",
                mb: 4,
                fontSize: { xs: "26px", md: "34px" },
              }}
            >
              INFRASTRUCTURE
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: "white",
                maxWidth: "700px",
                mx: "auto",
                mb: 8,
                fontSize: { xs: "12px", md: "16px" },
              }}
            >
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit.
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 4,
                mb: 4,
              }}
            >
              {[0, 1].map((i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={boxVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  viewport={{ once: true }}
                  style={{ flex: 1, display: "flex" }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#353535",
                      borderRadius: "4px",
                      p: 3,
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      minHeight: { xs: 40, md: 100 },
                      transition:
                        "background-color 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        backgroundColor: "#393939",
                        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#fff",
                        fontSize: { xs: "10px", md: "12px" },
                        fontWeight: 500,
                      }}
                    >
                      {contentData[i]}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>

            {/* Box Row 2 */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 4,
                mb: 4,
              }}
            >
              {[2, 3].map((i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={boxVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  viewport={{ once: true }}
                  style={{ flex: 1, display: "flex" }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#353535",
                      borderRadius: "4px",
                      p: 3,
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      minHeight: { xs: 40, md: 100 },
                      transition:
                        "background-color 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        backgroundColor: "#444",
                        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#fff",
                        fontSize: { xs: "10px", md: "12px" },
                        fontWeight: 500,
                      }}
                    >
                      {contentData[i]}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>

            {/* Full-width Box */}
            <motion.div
              custom={4}
              variants={boxVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              viewport={{ once: true }}
              style={{ display: "flex" }}
            >
              <Box
                sx={{
                  backgroundColor: "#353535",
                  borderRadius: "4px",
                  p: 3,
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: { xs: 40, md: 100 },
                  transition:
                    "background-color 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#444",
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: { xs: "10px", md: "12px" },
                    fontWeight: 500,
                  }}
                >
                  {contentData[4]}
                </Typography>
              </Box>
            </motion.div>
          </Box>
        </Container>
      </Box>
    </motion.div>
  );
};

export default Infrastructure;

"use client";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import FactoryIcon from "@mui/icons-material/Factory";
import TerrainIcon from "@mui/icons-material/Terrain";

const skewBlock = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.6, -0.05, 0.01, 0.99] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const iconList = [
  <FactoryIcon key="factory" fontSize="large" sx={{ color: "#fff" }} />,
  <PrecisionManufacturingIcon
    key="precision"
    fontSize="large"
    sx={{ color: "#fff" }}
  />,
  <AgricultureIcon key="agriculture" fontSize="large" sx={{ color: "#fff" }} />,
  <ApartmentIcon key="apartment" fontSize="large" sx={{ color: "#fff" }} />,
  <TerrainIcon key="terrain" fontSize="large" sx={{ color: "#fff" }} />,
];

const contentData = [
  "34-acre food processing and manufacturing unit in Nagpur.",
  "State-of-the-art facilities for safety gear, food products & precast.",
  "USDA certified AEO plant for non-Basmati rice export.",
  "Commercial real estate & luxury resort development projects.",
  "Mining operations with 5+ crushing units in Central India.",
];

const Infrastructure = () => {
  return (
    <motion.div
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
        }}
      >
        <Container sx={{ position: "relative" }}>
          <Box sx={{ position: "relative", zIndex: 2 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 600,
                color: "white",
                mb: 2,
                fontSize: { xs: "26px", md: "36px" },
                textAlign: "center",
              }}
            >
              INFRASTRUCTURE
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#fff",
                maxWidth: "700px",
                mx: "auto",
                mb: 6,
                fontSize: { xs: "14px", md: "16px" },
                textAlign: "center",
              }}
            >
              Our diversified infrastructure powers innovation across
              industries, from agri-tech to real estate and manufacturing.
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "1fr 1fr",
                  md: "repeat(3, 1fr)",
                },
                gap: 4,
              }}
            >
              {contentData.map((text, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover={{ scale: 1.04, rotate: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      background: "#353535",
                      backdropFilter: "blur(8px)",
                      borderRadius: "16px",
                      padding: 3,
                      minHeight: 140,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      border: "1px solid rgba(255,255,255,0.1)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                      },
                    }}
                  >
                    <Box mb={1}>{iconList[i]}</Box>
                    <Typography
                      sx={{
                        color: "#fff",
                        fontWeight: 500,
                        fontSize: { xs: "12px", md: "14px" },
                      }}
                    >
                      {text}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </motion.div>
  );
};

export default Infrastructure;

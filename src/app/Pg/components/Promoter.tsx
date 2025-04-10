"use client";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import Image1 from "../../assets/img/team/Shri-Ujjwal.png";
import Image2 from "../../assets/img/team/Shri-Ulhas.png";
import Image3 from "../../assets/img/team/Umesh-ji.jpg";

// Smooth entrance for the orange section
const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const promoterProfiles = [
  {
    image: Image1.src,
    name: "Mr. Ujwal Pagariya",
    position: "Financial strategist and business expansion expert.",
  },
  {
    image: Image2.src,
    name: "Mr. Ulhas Pagariya",
    position: "Operations and industrial safety specialist.",
  },
  {
    image: Image3.src,
    name: "Mr. Umesh Pagariya",
    position: "Techno-commercial expert, driving diversified growth.",
  },
];

const Promoter = () => {
  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Box
        sx={{
          backgroundColor: "#E66234",
          py: { xs: 6, md: 12 },
          px: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          my: { xs: 8, md: 10 },
        }}
      >
        <Container
          sx={{
            maxWidth: "lg",
            position: "relative",
            textAlign: "center",
          }}
        >
          <Box sx={{ position: "relative", zIndex: 2 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 600,
                color: "white",
                mb: 4,
                fontSize: { xs: "26px", md: "34px" },
              }}
            >
              PROMOTERS
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
              Meet the Minds Behind Our Success
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 4,
                justifyContent: "center",
              }}
            >
              {promoterProfiles.map((profile, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.01, y: -4 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: "8px",
                      overflow: "hidden",
                      border: "none",
                      transition:
                        "background-color 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        backgroundColor: "#444",
                        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={profile.image}
                      alt={profile.name}
                      sx={{
                        width: "100%",
                        aspectRatio: "3 / 4",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                    <Box
                      sx={{
                        backgroundColor: "#353535",
                        p: 2,
                        py: 3,
                        textAlign: "left",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#fff",
                          fontWeight: 600,
                          fontSize: { xs: "14px", md: "16px" },
                        }}
                      >
                        {profile.name}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#fff",
                          fontSize: { xs: "10px", md: "12px" },
                          opacity: 0.8,
                        }}
                      >
                        {profile.position}
                      </Typography>
                    </Box>
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

export default Promoter;

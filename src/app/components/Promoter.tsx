"use client";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
// import Image1 from "../assets/img/team/Shri-Ujjwal.png";
// import Image2 from "../assets/img/team/Shri-Ulhas.png";
// import Image3 from "../assets/img/team/Umesh-ji-1.png";

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

const promoterProfiles = [
  {
    image: "/img/team/Shri-Ujjwal.png",
    name: "Mr. Ujwal Pagariya",
    position: "Financial strategist and business expansion expert.",
  },
  {
    image: "/img/team/Shri-Ulhas.png",
    name: "Mr. Ulhas Pagariya",
    position: "Operations and industrial safety specialist.",
  },
  {
    image: "/img/team/Umesh-ji.jpg",
    name: "Mr. Umesh Pagariya",
    position: "Techno-commercial expert, driving diversified growth.",
  },
];

const Promoter = () => {
  const skewRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: skewRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const scaleGlow = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

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
          my: { xs: 8, md: 10 },
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
              PROMOTER
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
                  variants={boxVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  viewport={{ once: true }}
                  style={{ flex: 1, display: "flex", flexDirection: "column" }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#353535",
                      borderRadius: "4px",
                      overflow: "hidden",
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
                        height: { xs: "300px", md: "460px" },
                        objectFit: "cover",
                        // display: "block",
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

"use client";
import { useState } from "react";
import { Box, Button, Typography, Modal, IconButton } from "@mui/material";
import HeroImage from "../../../assets/img/hero-bg.jpg";
import { CirclePlay, X } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box
        sx={{
          height: "90vh",
          backgroundImage: `url(${HeroImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          position: "relative",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,0.2))",
            zIndex: 1,
          }}
        />

        <Box
          sx={{
            maxWidth: "lg",
            width: "100%",
            margin: "0 auto",
            paddingLeft: { xs: "5%", md: "2%" },
            zIndex: 2,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: [0.95, 1.05, 1] }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ willChange: "transform, opacity" }}
          >
            <Typography
              sx={{
                fontSize: { xs: "36px", md: "46px" },
                fontWeight: 600,
                color: "#e0e0e0",
                // background: "linear-gradient(to right, #ed6936, #ffb347)",
                // WebkitBackgroundClip: "text",
                // WebkitTextFillColor: "transparent",
                // textShadow: "2px 2px 10px rgba(0,0,0,0.3)",
              }}
            >
              Pagariya Homes
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ willChange: "transform, opacity" }}
          >
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: 400,
                color: "#e0e0e0",
                mt: 1,
              }}
            >
              Complete Home Décor Solutions
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ willChange: "transform, opacity" }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 4 }}>
              <Button
                sx={{
                  // background: "linear-gradient(90deg, #ed6936, #ffb347)",
                  backgroundColor: "#ed6936",
                  color: "white",
                  width: "160px",
                  height: "45px",
                  textTransform: "none",
                  fontSize: "16px",
                  fontWeight: 500,
                  borderRadius: "4px",
                  boxShadow: "0 2px 10px rgba(237,105,54,0.4)",
                  transition: "all 0.3s",
                  "&:hover": {
                    boxShadow: "0 6px 30px rgba(237,105,54,0.6)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Get Started
              </Button>

              <motion.div
                onClick={handleOpen}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "white",
                  cursor: "pointer",
                  willChange: "transform",
                }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [1, 0.9, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.6,
                    ease: "easeInOut",
                  }}
                >
                  <CirclePlay size={34} color="#ed6936" strokeWidth={1.5} />
                </motion.div>
                <span style={{ fontSize: "16px" }}>Watch Video</span>
              </motion.div>
            </Box>
          </motion.div>
        </Box>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropProps={{
          style: {
            backgroundColor: "rgba(0, 0, 0, 0.85)",
          },
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4 }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80%",
              maxWidth: 800,
              bgcolor: "transparent",
              boxShadow: 24,
              outline: "none",
            }}
          >
            <Box sx={{ position: "relative" }}>
              <IconButton
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  top: -40,
                  right: -40,
                  backgroundColor: "rgba(255,255,255,0.1)",
                  color: "white",
                  zIndex: 1000,
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.2)",
                  },
                }}
              >
                <X />
              </IconButton>

              {open && (
                <iframe
                  width="100%"
                  height="450"
                  src="https://www.youtube.com/embed/M2jLZvRwGqU?autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  style={{ borderRadius: "8px" }}
                ></iframe>
              )}
            </Box>
          </Box>
        </motion.div>
      </Modal>
    </>
  );
};

export default Hero;

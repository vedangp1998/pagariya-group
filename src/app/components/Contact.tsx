"use client";

import type React from "react";
import { useState } from "react";
import { Box, Container, Typography, TextField, Button } from "@mui/material";
import { motion } from "framer-motion";

const MotionTypography = motion(Typography);
const MotionBox = motion(Box);
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Box
        sx={{
          pb: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
        }}
      >
        <Box>
          <MotionTypography
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            sx={{ fontSize: "32px", fontWeight: 600, color: "black" }}
            gutterBottom
          >
            CONTACT
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
        </Box>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 3,
            }}
          >
            {/* Left Section - Contact Information */}
            <Box
              sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 3 }}
            >
              <MotionBox
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.03 }}
                sx={{
                  p: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  height: "100%",
                  border: "1px solid transparent",
                  background: "#ffffff",
                  color: "#333",
                  boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px dotted rgba(239, 108, 55, 0.4)",
                    borderColor: "rgba(239, 108, 55, 0.3)",
                    mb: 2,
                  }}
                >
                  <LocationOnOutlinedIcon sx={{ color: "rgb(239, 108, 55)" }} />
                </Box>
                <Typography variant="h6" component="h2" gutterBottom>
                  Address
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Plot No-19, House No-1256/U1, Great Nag Road
                </Typography>
                <Typography variant="body2">
                  Nagpur - 440018 (Maharashtra (India))
                </Typography>
              </MotionBox>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 3,
                }}
              >
                {/* Call Us */}
                <MotionBox
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ scale: 1.03 }}
                  sx={{
                    p: 4,
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    border: "1px solid transparent",
                    background: "#ffffff",
                    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
                    color: "#333",
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "2px dotted rgba(239, 108, 55, 0.4)",
                      borderColor: "rgba(239, 108, 55, 0.3)",
                      mb: 2,
                    }}
                  >
                    <PhoneOutlinedIcon sx={{ color: "rgb(239, 108, 55)" }} />
                  </Box>
                  <Typography variant="h6" component="h2" gutterBottom>
                    Call Us
                  </Typography>
                  <Typography variant="body2">+91 712 2950073</Typography>
                </MotionBox>

                {/* Email Us */}
                <MotionBox
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ scale: 1.03 }}
                  sx={{
                    p: 4,
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    border: "1px solid transparent",
                    background: "#ffffff",
                    color: "#333",
                    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderColor: "rgba(239, 108, 55, 0.3)",
                      border: "2px dotted rgba(239, 108, 55, 0.4)",
                      mb: 2,
                    }}
                  >
                    <EmailOutlinedIcon
                      sx={{
                        color: "rgb(239, 108, 55)",
                      }}
                    />
                  </Box>
                  <Typography variant="h6" component="h2" gutterBottom>
                    Email Us
                  </Typography>
                  <Typography variant="body2">
                    exports@pagariyaexports.in
                  </Typography>
                </MotionBox>
              </Box>
            </Box>

            {/* Right Section - Contact Form */}
            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                background: "#ffffff",
                boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Box
                sx={{
                  p: 4,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  borderRadius: 2,
                  border: "1px solid transparent",
                }}
              >
                <form onSubmit={handleSubmit}>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                      }}
                    >
                      <TextField
                        fullWidth
                        name="name"
                        label="Your Name"
                        variant="outlined"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      <TextField
                        fullWidth
                        name="email"
                        label="Your Email"
                        variant="outlined"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </Box>
                    <TextField
                      fullWidth
                      name="subject"
                      label="Subject"
                      variant="outlined"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                    <TextField
                      fullWidth
                      name="message"
                      label="Message"
                      variant="outlined"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        mt: 2,
                      }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Button
                          type="submit"
                          sx={{
                            bgcolor: "rgb(239, 108, 55)",
                            color: "#fff",
                            textTransform: "none",
                            px: 4,
                            py: 1.5,
                            borderRadius: 50,
                            transition: "all 0.3s ease",
                            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                            "&:hover": {
                              bgcolor: "rgb(220, 90, 40)",
                              boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
                            },
                          }}
                        >
                          Send Message
                        </Button>
                      </motion.div>
                    </Box>
                  </Box>
                </form>
              </Box>
            </MotionBox>
          </Box>
        </Container>
      </Box>
    </>
  );
}

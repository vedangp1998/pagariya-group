"use client";

import type React from "react";
import { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  Stack,
} from "@mui/material";
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
    // Add your form submission logic here
  };

  return (
    <>
      <Box
        sx={{
          py: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "32px",
              fontWeight: 600,
              color: "black",
              textAlign: "center",
            }}
            gutterBottom
          >
            CONTACT
          </Typography>
          <Box
            sx={{
              width: "45px",
              height: "2.5px",
              backgroundColor: "#FF6F00",
              margin: "12px auto",
            }}
          />
        </Box>
        <Container maxWidth="lg">
          <Grid container spacing={3} sx={{ display: "flex" }}>
            {/* Left Section - Contact Information */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  mb: 3,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  borderRadius: 2,
                  height: "100%",
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
                    border: "1px solid",
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
                <Typography variant="body2" color="text.secondary">
                  Nagpur - 440018 (Maharashtra (India))
                </Typography>
              </Paper>

              <Grid container spacing={3}>
                {/* Call Us */}
                <Grid item xs={12} sm={6} sx={{ flexGrow: 1, display: "flex" }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      borderRadius: 2,
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
                        border: "1px solid",
                        borderColor: "rgba(239, 108, 55, 0.3)",
                        mb: 2,
                      }}
                    >
                      <PhoneOutlinedIcon sx={{ color: "rgb(239, 108, 55)" }} />
                    </Box>
                    <Typography variant="h6" component="h2" gutterBottom>
                      Call Us
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      +91 712 2950073
                    </Typography>
                  </Paper>
                </Grid>

                {/* Email Us */}
                <Grid item xs={12} sm={6} sx={{ flexGrow: 1, display: "flex" }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      borderRadius: 2,
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
                        border: "1px solid",
                        borderColor: "rgba(239, 108, 55, 0.3)",
                        mb: 2,
                      }}
                    >
                      <EmailOutlinedIcon sx={{ color: "rgb(239, 108, 55)" }} />
                    </Box>
                    <Typography variant="h6" component="h2" gutterBottom>
                      Email Us
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      exports@pagariyaexports.in
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>

            {/* Right Section - Contact Form */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  borderRadius: 2,
                }}
              >
                <form onSubmit={handleSubmit}>
                  <Stack spacing={3}>
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
                      <Button
                        type="submit"
                        variant="contained"
                        sx={{
                          bgcolor: "rgb(239, 108, 55)",
                          "&:hover": { bgcolor: "rgb(220, 90, 40)" },
                          px: 4,
                          py: 1.5,
                          borderRadius: 50,
                        }}
                      >
                        Send Message
                      </Button>
                    </Box>
                  </Stack>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

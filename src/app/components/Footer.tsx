"use client";

import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  IconButton,
  Link as MuiLink,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Fade } from "@mui/material";

const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#121212",
        color: "#fff",
        py: 6,
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "space-between",
          }}
        >
          {/* Company Info */}
          <Box sx={{ flex: 1, minWidth: 250 }}>
            <Typography variant="h4" gutterBottom>
              Pagariya Group
            </Typography>
            <Typography variant="body2" paragraph>
              Plot No-19, House No-1256/U1, Great Nag Road
            </Typography>
            <Typography variant="body2" paragraph>
              Nagpur - 440018 Maharashtra (India)
            </Typography>
            <Typography variant="body2" paragraph>
              Plant No.A, Plot No 545, K.H.No. 136/1A,
              <br />
              Lihigaon Road, Mahalgaon, Kapsi, Nagpur - 441104
            </Typography>
            <Typography variant="body2" paragraph>
              <strong>Phone:</strong> +91 712 2950073
            </Typography>
            <Typography variant="body2" paragraph>
              <strong>Mobile:</strong> +91 9373593225
            </Typography>
            <Typography variant="body2" paragraph>
              <strong>Email:</strong> exports@pagariyaexports.in
            </Typography>
            <Box mt={2}>
              {[TwitterIcon, FacebookIcon, InstagramIcon, LinkedInIcon].map(
                (Icon, index) => (
                  <IconButton
                    key={index}
                    sx={{
                      color: "#fff",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      mr: 1,
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                      },
                    }}
                    size="small"
                  >
                    <Icon fontSize="small" />
                  </IconButton>
                )
              )}
            </Box>
          </Box>

          {/* Useful Links */}
          <Box sx={{ flex: 1, minWidth: 200 }}>
            <Typography variant="h5" gutterBottom>
              Useful Links
            </Typography>
            {["/", "/about", "/services", "/terms", "/privacy"].map(
              (href, i) => (
                <Link key={i} href={href} passHref legacyBehavior>
                  <MuiLink
                    sx={{
                      color: "#fff",
                      textDecoration: "none",
                      display: "block",
                      mb: 1,
                      "&:hover": { textDecoration: "underline" },
                      fontSize: "14px",
                    }}
                  >
                    {href === "/"
                      ? "Home"
                      : href === "/about"
                      ? "About us"
                      : href === "/services"
                      ? "Services"
                      : href === "/terms"
                      ? "Terms of service"
                      : "Privacy policy"}
                  </MuiLink>
                </Link>
              )
            )}
          </Box>

          {/* Newsletter */}
          <Box sx={{ flex: 1, minWidth: 250 }}>
            <Typography variant="h6" gutterBottom>
              Our Newsletter
            </Typography>
            <Typography variant="body2" paragraph>
              Subscribe to our newsletter and receive the latest news about our
              products and services!
            </Typography>
            <Box
              component="form"
              noValidate
              sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: 1,
              }}
            >
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Your email"
                size="small"
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  input: { color: "#fff" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.2)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.3)",
                    },
                  },
                }}
              />
              <Button
                disableElevation
                sx={{
                  backgroundColor: "#E66234",
                  color: "#fff",
                  px: 2,
                  width: isMobile ? "100%" : "auto",
                  mt: isMobile ? 1 : 0,
                  fontSize: "14px",
                  transition: "all 0.3s ease",
                  transform: "scale(1)",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#d1542d",
                    transform: "scale(1.05)",
                    boxShadow: "0 6px 16px rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Copyright */}
        <Box
          mt={6}
          pt={3}
          borderTop={1}
          borderColor="rgba(255, 255, 255, 0.1)"
          textAlign="center"
        >
          <Typography variant="body2" color="text.secondary">
            © Copyright <strong>PAGARIYA GROUP</strong> All Rights Reserved
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={1}>
            Designed by{" "}
            <MuiLink
              href="https://galiyaarafilms.com"
              color="#F47B43"
              target="_blank"
              rel="noopener"
            >
              Galiyaara Films
            </MuiLink>
          </Typography>
        </Box>
      </Container>

      {showScrollButton && (
        <Fade in={showScrollButton}>
          <IconButton
            size="small"
            onClick={scrollToTop}
            aria-label="scroll to top"
            sx={{
              position: "fixed",
              bottom: theme.spacing(2),
              right: theme.spacing(2),
              backgroundColor: "#F47B43",
              color: "#fff",
              zIndex: 1300,
              transition: "all 0.8s ease-in-out",
              "&:hover": { backgroundColor: "#e06a33" },
            }}
          >
            <KeyboardArrowUpIcon />
          </IconButton>
        </Fade>
      )}
    </Box>
  );
};

export default Footer;

"use client";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
  Link as MuiLink,
  useMediaQuery,
  styled,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Link from "next/link";

const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: "#121212",
  color: "#fff",
  padding: theme.spacing(6, 0, 2),
  position: "relative",
}));

const FooterLink = styled(MuiLink)(({ theme }) => ({
  color: "#fff",
  textDecoration: "none",
  display: "block",
  marginBottom: theme.spacing(1),
  "&:hover": {
    textDecoration: "underline",
  },
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  color: "#fff",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  marginRight: theme.spacing(1),
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
}));

const ScrollToTopButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  backgroundColor: "#F47B43",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#e06a33",
  },
}));

const SubscribeButton = styled(Button)(() => ({
  backgroundColor: "#F47B43",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#e06a33",
  },
}));

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <StyledFooter component="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
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
              <strong>Mobile:</strong> +91 +91 9373593225
            </Typography>
            <Typography variant="body2" paragraph>
              <strong>Email:</strong> exports@pagariyaexports.in
            </Typography>
            <Box mt={2}>
              <SocialIcon aria-label="Twitter" size="small">
                <TwitterIcon fontSize="small" />
              </SocialIcon>
              <SocialIcon aria-label="Facebook" size="small">
                <FacebookIcon fontSize="small" />
              </SocialIcon>
              <SocialIcon aria-label="Instagram" size="small">
                <InstagramIcon fontSize="small" />
              </SocialIcon>
              <SocialIcon aria-label="LinkedIn" size="small">
                <LinkedInIcon fontSize="small" />
              </SocialIcon>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Useful Links
            </Typography>
            <Link href="/" passHref legacyBehavior>
              <FooterLink>Home</FooterLink>
            </Link>
            <Link href="/about" passHref legacyBehavior>
              <FooterLink>About us</FooterLink>
            </Link>
            <Link href="/services" passHref legacyBehavior>
              <FooterLink>Services</FooterLink>
            </Link>
            <Link href="/terms" passHref legacyBehavior>
              <FooterLink>Terms of service</FooterLink>
            </Link>
            <Link href="/privacy" passHref legacyBehavior>
              <FooterLink>Privacy policy</FooterLink>
            </Link>
          </Grid>

          <Grid item xs={12} md={5}>
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
              <SubscribeButton
                variant="contained"
                disableElevation
                sx={{
                  width: isMobile ? "100%" : "auto",
                  mt: isMobile ? 1 : 0,
                }}
              >
                Subscribe
              </SubscribeButton>
            </Box>
          </Grid>
        </Grid>

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

      {/* Scroll to top button */}
      <ScrollToTopButton
        size="small"
        onClick={scrollToTop}
        aria-label="scroll to top"
      >
        <KeyboardArrowUpIcon />
      </ScrollToTopButton>
    </StyledFooter>
  );
};

export default Footer;

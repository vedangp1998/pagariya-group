import { Box, Button, Typography } from "@mui/material";
import HeroImage from "../assets/img/hero-bg.jpg";

const Hero = () => {
  return (
    <Box
      sx={{
        height: "90vh",
        backgroundImage: `url(${HeroImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingLeft: "5%",
        color: "white",
        zIndex: 1,
        position: "relative",
        width: "100%",
      }}
    >
      <Box sx={{ maxWidth: "1200px" }}>
        <Box>
          <Typography variant="h2">Utex Industries</Typography>
          <Typography variant="body1">
            Pioneering Safety, Protecting Lives.
          </Typography>
          <Box>
            <Button
              sx={{
                background: "#ed6936",
                color: "white",
                width: "160px",
                height: "40px",
                textTransform: "none",
                fontSize: "16px",
              }}
            >
              Get Started
            </Button>

            <a
              href="https://www.youtube.com/watch?v=M2jLZvRwGqU"
              className="glightbox btn-watch-video d-flex align-items-center"
            >
              <i className="bi bi-play-circle"></i>
              <span>Watch Video</span>
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;

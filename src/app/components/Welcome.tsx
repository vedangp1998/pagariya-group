import { Box, Typography, Container } from "@mui/material";
import Image from "next/image";
import WorkingImage from "../assets/img/working-4.jpg";

const Welcome = () => {
  return (
    <>
      <Box
        sx={{
          maxWidth: "lg",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "40px",
          margin: "auto",
          gap: 12,
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "24px", fontWeight: "semi-bold" }}>
            WELCOME TO UTEX INDUSTRIES
          </Typography>
          <Typography sx={{ fontSize: "16px", marginTop: 1, width: "600px" }}>
            It stands as a leading manufacturer and supplier of industrial and
            personal protective equipment (PPE). With an advanced
            technology-driven manufacturing setup, we specialize in customized
            fall protection solutions designed to meet the diverse safety needs
            of industries worldwide.
          </Typography>
        </Box>
        <Box>
          <Image src={WorkingImage} alt="Image" />
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#E66234",
          transform: "skewY(-3deg)",
          py: { xs: 4, md: 16 },
          px: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginY: "110px",
        }}
      >
        <Container
          sx={{
            transform: "skewY(3deg)",
            textAlign: "left",
            maxWidth: "md",
          }}
        >
          <Typography
            sx={{ fontSize: "32px", color: "black", fontWeight: 700 }}
            gutterBottom
          >
            Commitment to Excellence
          </Typography>
          <Typography sx={{ fontSize: "20px", color: "black" }}>
            Our unwavering dedication to safety and quality has earned us the
            ISO 14001-2015 certification, reinforcing our commitment to
            environmentally responsible manufacturing.
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Welcome;

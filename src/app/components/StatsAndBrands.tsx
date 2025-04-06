"use client";
import { Box, Typography } from "@mui/material";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

import Logo1 from "../assets/logos/logo1.png";
import Logo2 from "../assets/logos/logo2.png";
import Logo3 from "../assets/logos/logo3.png";
import Logo4 from "../assets/logos/logo4.png";
import Logo5 from "../assets/logos/logo5.png";
import Logo6 from "../assets/logos/logo6.png";
import Logo7 from "../assets/logos/logo7.png";
import Logo8 from "../assets/logos/logo8.png";
import Logo9 from "../assets/logos/logo9.png";
import Logo10 from "../assets/logos/logo10.png";
import Logo11 from "../assets/logos/logo11.png";
import Logo12 from "../assets/logos/logo12.png";
import Logo13 from "../assets/logos/logo13.png";
import Logo14 from "../assets/logos/logo14.png";
import Logo15 from "../assets/logos/logo15.png";
import Logo16 from "../assets/logos/logo16.png";
import Logo17 from "../assets/logos/logo17.png";
import Logo18 from "../assets/logos/logo18.png";
import Logo19 from "../assets/logos/logo19.png";
import Logo20 from "../assets/logos/logo20.png";
import Logo21 from "../assets/logos/logo21.png";
import Logo22 from "../assets/logos/logo22.png";
import Logo23 from "../assets/logos/logo23.png";

// const AnimatedStrip = ({ brands, direction = "left", delay = 0 }) => {
//   const animateFrom = direction === "left" ? "100%" : "-100%";
//   const animateTo = direction === "left" ? "-100%" : "100%";

//   return (
//     <motion.div
//       initial={{ x: animateFrom, opacity: 0.4 }}
//       animate={{ x: animateTo, opacity: 1 }}
//       transition={{
//         repeat: Infinity,
//         ease: "linear",
//         duration: 40,
//         delay,
//       }}
//       style={{
//         display: "flex",
//         gap: "40px",
//         whiteSpace: "nowrap",
//       }}
//     >
//       {[...brands, ...brands].map((brand, index) => (
//         <motion.div
//           key={index}
//           whileHover={{ scale: 1.1 }}
//           transition={{ type: "spring", stiffness: 200 }}
//         >
//           <Box
//             sx={{
//               bgcolor: "#ffffff",
//               borderRadius: 3,
//               boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
//               p: 3,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               height: 100,
//               width: 180,
//               flexShrink: 0,
//               transition: "transform 0.3s ease",
//             }}
//           >
//             <Box
//               component="img"
//               src={brand.logo.src}
//               alt={brand.name}
//               sx={{
//                 maxWidth: "100%",
//                 maxHeight: "100%",
//                 objectFit: "contain",
//                 filter: "brightness(1.1) contrast(1.2)",
//               }}
//             />
//           </Box>
//         </motion.div>
//       ))}
//     </motion.div>
//   );
// };

// export const BrandCarousel = ({ brands }) => {
//   const [groups, setGroups] = useState([[], [], []]);

//   useEffect(() => {
//     const newGroups = [[], [], []];
//     brands.forEach((brand, index) => {
//       newGroups[index % 3].push(brand);
//     });
//     setGroups(newGroups);
//   }, [brands]);

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         overflow: "hidden",
//         background: "linear-gradient(to bottom, #f8f8f8, #e8e8e8)",
//         py: 6,
//         px: 2,
//       }}
//     >
//       <Box sx={{ mb: 4 }}>
//         <AnimatedStrip brands={groups[0]} direction="left" delay={0} />
//       </Box>
//       <Box sx={{ mb: 4 }}>
//         <AnimatedStrip brands={groups[1]} direction="right" delay={2} />
//       </Box>
//       <Box>
//         <AnimatedStrip brands={groups[2]} direction="left" delay={4} />
//       </Box>
//     </Box>
//   );
// };

const MotionBox = motion(Box);

export default function StatsAndBrands() {
  const brands = [
    { name: "UTZ", logo: Logo1 },
    { name: "PAGARIYA", logo: Logo2 },
    { name: "PAGARIYA GROUP", logo: Logo3 },
    { name: "PAGARIYA REALTORS", logo: Logo4 },
    { name: "PAGARIYA WOODWORKS", logo: Logo5 },
    { name: "PAGARIYA HOMES", logo: Logo6 },
    { name: "PAGARIYA METALS", logo: Logo7 },
    { name: "PAGARIYA LAKE GARDEN", logo: Logo8 },
    { name: "PAGARIYA LAWNS", logo: Logo9 },
    { name: "PAGARIYA FARMS", logo: Logo10 },
    { name: "PAGARIYA EQUIPMENT SOLUTIONS", logo: Logo11 },
    { name: "PAGARIYA EQUIPMENT SOLUTIONS", logo: Logo12 },
    { name: "PAGARIYA CRUSHERS", logo: Logo13 },
    { name: "PAGARIYA TEXTILE PARK", logo: Logo14 },
    { name: "PAGARMAL FOUNDATION", logo: Logo15 },
    { name: "DARAS", logo: Logo16 },
    { name: "VIDARBHA", logo: Logo17 },
    { name: "URJA TECH", logo: Logo18 },
    { name: "URJA INFRASTONE", logo: Logo19 },
    { name: "URJA INFRASTRUCTURES", logo: Logo20 },
    { name: "PAGARIYA STONES", logo: Logo21 },
    { name: "PAGARIYA CERAMIC", logo: Logo22 },
    { name: "GREEN", logo: Logo23 },
  ];

  const stats = [
    {
      number: "70",
      text: "Years of Industry Leadership",
      icon: <LightbulbOutlinedIcon sx={{ color: "#FF7F50" }} />,
    },
    {
      number: "85",
      text: "Presence in Countries",
      icon: <PublicOutlinedIcon sx={{ color: "#FF7F50" }} />,
    },
    {
      number: "34",
      text: "Acre Processing Facility",
      icon: <BusinessOutlinedIcon sx={{ color: "#FF7F50" }} />,
    },
  ];

  return (
    <Box sx={{ width: "100%", marginBottom: 12 }}>
      {/* Stats Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          gap: 2,
          mb: 6,
          px: 2,
          maxWidth: 1200,
          mx: "auto",
        }}
      >
        {stats.map((stat, index) => (
          <Box
            key={index}
            sx={{
              bgcolor: "white",
              borderRadius: 2,
              boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.08)",
              p: 2,
              textAlign: "center",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              minHeight: 100,
              transition: "all 0.3s ease",
              "&:hover": {
                boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
                // transform: "translateY(-4px) scale(1.02)",
              },
            }}
          >
            <Box
              sx={{
                width: 50,
                height: 50,
                borderRadius: "50%",
                bgcolor: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                top: -25,
                left: "50%",
                transform: "translateX(-50%)",
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              {stat.icon}
            </Box>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem" },
                fontWeight: 500,
                color: "#555",
                mt: 3,
              }}
            >
              {stat.number}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#777",
                mt: 0.5,
                fontSize: "0.95rem",
              }}
            >
              {stat.text}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Brands Grid */}

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
          px: { xs: 1, sm: 2, md: 4 },
          py: 6,
          bgcolor: "#f8f8f8",
          width: "100vw",
        }}
      >
        {brands.map((brand, index) => (
          <MotionBox
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0, ease: "easeOut" }}
            viewport={{ once: true }}
            sx={{
              bgcolor: "white",
              borderRadius: 2,
              border: "1px solid #e0e0e0",
              boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
              p: 1.5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: {
                xs: "calc(50% - 8px)",
                sm: "calc(25% - 12px)",
                md: "calc(16.666% - 12px)",
                lg: "calc(12.5% - 12px)",
              },
              height: 65,
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                transform: "translateY(-4px) scale(1.02)",

                borderColor: "#E66234",
              },
            }}
          >
            <Box
              component="img"
              src={brand.logo.src}
              alt={brand.name}
              sx={{
                maxWidth: "65%",
                maxHeight: "100%",
                objectFit: "contain",
                transition: "transform 0.3s ease",
              }}
            />
          </MotionBox>
        ))}
      </Box>

      {/* <BrandCarousel brands={brands} /> */}
    </Box>
  );
}

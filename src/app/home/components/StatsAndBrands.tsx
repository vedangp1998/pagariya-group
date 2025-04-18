"use client";

import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import { motion, useMotionValue, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

// Logo Imports
import Logo1 from "../../assets/logos/logo1.png";
import Logo2 from "../../assets/logos/logo2.png";
import Logo3 from "../../assets/logos/logo3.png";
import Logo4 from "../../assets/logos/logo4.png";
import Logo5 from "../../assets/logos/logo5.png";
import Logo6 from "../../assets/logos/logo6.png";
import Logo7 from "../../assets/logos/logo7.png";
import Logo8 from "../../assets/logos/logo8.png";
import Logo9 from "../../assets/logos/logo9.png";
import Logo10 from "../../assets/logos/logo10.png";
import Logo11 from "../../assets/logos/logo11.png";
import Logo12 from "../../assets/logos/logo12.png";
import Logo13 from "../../assets/logos/logo13.png";
import Logo14 from "../../assets/logos/logo14.png";
import Logo15 from "../../assets/logos/logo15.png";
import Logo16 from "../../assets/logos/logo16.png";
import Logo17 from "../../assets/logos/logo17.png";
import Logo18 from "../../assets/logos/logo18.png";
import Logo19 from "../../assets/logos/logo19.png";
import Logo20 from "../../assets/logos/logo20.png";
import Logo21 from "../../assets/logos/logo21.png";
import Logo22 from "../../assets/logos/logo22.png";
import Logo23 from "../../assets/logos/logo23.png";
import Logo25 from "../../assets/logos/logo25.png";

const MotionBox = motion(Box);

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const StatCounter = ({ number }: { number: number }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const count = useMotionValue(0);
  const [displayedValue, setDisplayedValue] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, number, {
        duration: 1,
        ease: "easeOut",
        onUpdate: (latest) => setDisplayedValue(Math.round(latest)),
      });
      return () => controls.stop();
    }
  }, [inView, number, count]);

  return (
    <Typography
      ref={ref}
      variant="h3"
      sx={{
        fontSize: { xs: "2rem", md: "2.5rem" },
        fontWeight: 500,
        color: "#555",
        mt: 3,
      }}
    >
      {displayedValue}
    </Typography>
  );
};

export default function StatsAndBrands() {
  const brands = [
    { name: "UTEX", logo: Logo1, link: "/home/utex" },
    { name: "PAGARIYA EXPORTS", logo: Logo2, link: "/home/pagariya-exports" },
    { name: "PAGARIYA HOMES", logo: Logo3, link: "/home/pagariya-homes" },
    { name: "PAGARIYA REALTORS", logo: Logo4, link: "/home/pagariya-realtors" },
    { name: "SWAADITI", logo: Logo25, link: "/home/swaaditi" },
    { name: "PAGARIYA WOODWORKS", logo: Logo5, link: "/home" },
    { name: "PAGARIYA HOMES", logo: Logo6, link: "/home" },
    { name: "PAGARIYA METALS", logo: Logo7, link: "/home" },
    { name: "PAGARIYA LAKE GARDEN", logo: Logo8, link: "/home" },
    { name: "PAGARIYA LAWNS", logo: Logo9, link: "/home" },
    { name: "PAGARIYA FARMS", logo: Logo10, link: "/home" },
    { name: "PAGARIYA EQUIPMENT SOLUTIONS", logo: Logo11, link: "/home" },
    { name: "PAGARIYA EQUIPMENT SOLUTIONS", logo: Logo12, link: "/home" },
    { name: "PAGARIYA CRUSHERS", logo: Logo13, link: "/home" },
    { name: "PAGARIYA TEXTILE PARK", logo: Logo14, link: "/home" },
    { name: "PAGARMAL FOUNDATION", logo: Logo15, link: "/home" },
    { name: "DARAS", logo: Logo16, link: "/home" },
    { name: "VIDARBHA", logo: Logo17, link: "/home" },
    { name: "URJA TECH", logo: Logo18, link: "/home" },
    { name: "URJA INFRASTONE", logo: Logo19, link: "/home" },
    { name: "URJA INFRASTRUCTURES", logo: Logo20, link: "/home" },
    { name: "PAGARIYA STONES", logo: Logo21, link: "/home" },
    { name: "PAGARIYA CERAMIC", logo: Logo22, link: "/home" },
    { name: "GREEN", logo: Logo23, link: "/home" },
  ];

  const stats = [
    {
      number: 70,
      text: "Years of Industry Leadership",
      icon: <LightbulbOutlinedIcon sx={{ color: "#FF7F50" }} />,
    },
    {
      number: 85,
      text: "Presence in Countries",
      icon: <PublicOutlinedIcon sx={{ color: "#FF7F50" }} />,
    },
    {
      number: 34,
      text: "Acre Processing Facility",
      icon: <BusinessOutlinedIcon sx={{ color: "#FF7F50" }} />,
    },
  ];

  return (
    <Box sx={{ width: "100%", marginBottom: 12 }}>
      {/* Stats */}
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
            <StatCounter number={stat.number} />
            <Typography
              variant="body1"
              sx={{ color: "#777", mt: 0.5, fontSize: "0.95rem" }}
            >
              {stat.text}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Brands */}
      <MotionBox
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
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
        {brands.map((brand, index) => {
          if (!brand.link) return null;

          return (
            <Link
              key={index}
              href={brand.link}
              style={{ display: "contents" }}
              prefetch
            >
              <MotionBox
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                sx={{
                  bgcolor: "white",
                  borderRadius: 2,
                  border: "1px solid #e0e0e0",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                  p: 2.5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: {
                    xs: "calc(50% - 8px)",
                    sm: "calc(25% - 12px)",
                    md: "calc(16.666% - 12px)",
                    lg: "calc(12.5% - 12px)",
                  },
                  height: 110,
                  cursor: "pointer",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                    transform: "translateY(-4px) scale(1.02)",
                    borderColor: "#E66234",
                  },
                }}
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                />
              </MotionBox>
            </Link>
          );
        })}
      </MotionBox>
    </Box>
  );
}

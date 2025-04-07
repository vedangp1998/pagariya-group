"use client";
import { Box, Typography, Container } from "@mui/material";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ImageSwaaditi from "../../../assets/details/swaaditi.jpg";

const Details = [
  {
    title: "About Us",
    content:
      "‘Swaaditi’, the company’s flagship FMCG brand, is a game-changer in the packaged food industry. This ambitious venture will encompass a wide variety of food products, from spices to new product categories, setting new benchmarks in taste and quality. With a strong focus on international expansion, the brand aims to bring its authentic flavors beyond India’s borders, catering to global food lovers.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Welcome = () => {
  const skewRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: skewRef,
    offset: ["start end", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [40, -20]);

  return (
    <>
      {/* Welcome Content + Image */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 2, sm: 4, md: 8 },
          py: { xs: 4, md: 8 },
          gap: { xs: 4, md: 8 },
          maxWidth: "lg",
          mx: "auto",
        }}
      >
        {/* Text Content */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          style={{ flex: 1 }}
        >
          <Typography
            sx={{
              fontSize: { xs: "24px", sm: "28px" },
              mt: 1,
              textAlign: { xs: "center", md: "left" },
              color: "#000000",
            }}
          >
            WELCOME TO SWAADITI
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "6px", sm: "10px" },
              mt: 1,
              textAlign: { xs: "center", md: "left" },
              color: "#000000",
            }}
          >
            (Part of Pagariya Consumer Foods Pvt. Ltd.)
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "16px" },
              mt: 2,
              textAlign: { xs: "center", md: "left" },
              color: "#444",
            }}
          >
            At Pagariya Consumer Foods Pvt. Ltd., we don’t just create food, we
            craft experiences, blending tradition with innovation to bring you
            the finest flavors from India and beyond.
          </Typography>
        </motion.div>

        {/* Animated Image with Hover */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          whileHover={{
            scale: 1.05,
            rotate: 3,
            boxShadow: "0px 12px 30px rgba(0,0,0,0.2)",
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            flex: 1,
            width: "100%",
            maxWidth: 500,
            position: "relative",
            borderRadius: 12,
            overflow: "hidden",
            transformOrigin: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: { xs: 200, sm: 300, md: 350 },
              position: "relative",
              borderRadius: 3,
              overflow: "hidden",
            }}
          >
            <Image
              src={ImageSwaaditi}
              alt="Image Swaaditi"
              fill
              style={{
                objectFit: "cover",
                borderRadius: 12,
              }}
              priority
            />
          </Box>
        </motion.div>
      </Box>

      {/* Straight Orange Background Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
      >
        <Box
          ref={skewRef}
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
              textAlign: "center",
              maxWidth: "md",
              position: "relative",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: 4, md: 6 },
                position: "relative",
                zIndex: 2,
              }}
            >
              {Details.map((item, i) => (
                <motion.div
                  key={item.title}
                  style={{ y: textY, flex: 1 }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: i * 0.1,
                  }}
                  viewport={{ once: true }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "18px", md: "32px" },
                      color: "black",
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "16px", md: "20px" },
                      color: "black",
                    }}
                  >
                    {item.content}
                  </Typography>
                </motion.div>
              ))}
            </Box>
          </Container>
        </Box>
      </motion.div>
    </>
  );
};

export default Welcome;

"use client";
import { Box, Typography, Container } from "@mui/material";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

const Details = [
  {
    title: "About Us",
    content:
      "Founded in 1950, Pagariya Group began as a textile trader and later expanded into cotton ginning, food grains trading, and diversified industrial sectors. Today, we are a multifaceted enterprise with a global footprint.",
  },
  {
    title: "Mission",
    content:
      "Sustainable growth with innovation and integrity, creating value for stakeholders and communities.",
  },
  {
    title: "Vision",
    content:
      "Lead global trade with superior service, quality products, and long-term partnerships.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const skewBlock = {
  hidden: { opacity: 0, y: 80, skewY: -5 },
  visible: {
    opacity: 1,
    y: 0,
    skewY: -3,
    transition: { duration: 1, ease: [0.6, -0.05, 0.01, 0.99] },
  },
};

const Welcome = () => {
  const skewRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: skewRef,
    offset: ["start end", "end start"],
  });

  // const bgY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const textY = useTransform(scrollYProgress, [0, 1], [40, -20]);
  // const scaleGlow = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-around",
          alignItems: "center",
          px: { xs: 2, sm: 4, md: 8 },
          py: { xs: 4, md: 8 },
          gap: { xs: 6, md: 12 },
          maxWidth: "lg",
          mx: "auto",
        }}
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          style={{
            maxWidth: "lg",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "24px", sm: "28px" },
              mt: 1,
              textAlign: { xs: "center", md: "left" },
              color: "#000000",
            }}
          >
            WELCOME TO PAGARIYA GROUP
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "16px" },
              mt: 2,
              textAlign: { xs: "center", md: "left" },
              color: "#444",
            }}
          >
            Rooted in the heart of Central India, Pagariya Group embarked on its
            remarkable journey in 1950 with a singular vision—to build a legacy
            of excellence. Today, we stand tall as Central India’s leading and
            most dynamic business conglomerate, driven by innovation, growth,
            and a deep commitment to community progress.
          </Typography>
        </motion.div>
      </Box>
      <motion.div
        ref={skewRef}
        variants={skewBlock}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <Box
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
              transform: "skewY(3deg)",
              textAlign: "left",
              maxWidth: "md",
              position: "relative",
            }}
          >
            <Box
              sx={{
                transform: "skewY(-3deg)",
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
                      fontSize: { xs: "18px", md: "26px" },
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

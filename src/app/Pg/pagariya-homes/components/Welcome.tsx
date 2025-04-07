"use client";
import { Box, Typography, Container } from "@mui/material";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ImageHomes from "../../../assets/details/Pagariya-Homes.jpg";

// Card Images
import Img1 from "../../../assets/details/pgh-card1.jpg";
import Img2 from "../../../assets/details/pgh-card2.jpg";
import Img3 from "../../../assets/details/pgh-card3.jpg";
import Img4 from "../../../assets/details/pgh-card4.jpg";

// Top section content
const Details = [
  {
    title: "Why Choose Pagariya Homes?",
    content: "",
  },
];

// Card content array
const FeatureCards = [
  { img: Img1, text: "Central India’s largest home interiors mall" },
  {
    img: Img2,
    text: "Expertise in premium wood flooring – sample wood, designer laminate, crown & antique finishes",
  },
  { img: Img3, text: "Authorized dealer for 20+ top global brands" },
  { img: Img4, text: "Customized, high-quality interior solutions" },
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
            WELCOME TO PAGARIYA HOMES
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "16px" },
              mt: 2,
              textAlign: { xs: "center", md: "left" },
              color: "#444",
            }}
          >
            Pagariya Homes is your one-stop destination for stylish and
            functional home decor solutions. With years of expertise in interior
            design and home improvement, we transform living spaces into
            personalized havens that balance aesthetics with practicality.
            <br />
            <br />
            Our expert designers meticulously curate every aspect of interior
            decor—from furniture selection and color palettes to lighting and
            accessories—ensuring a seamless harmony in every space.
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
              src={ImageHomes}
              alt="Pagariya Homes"
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

      {/* Orange Section with Cards */}
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
            my: { xs: 8, md: 10 },
          }}
        >
          <Container sx={{ maxWidth: "lg" }}>
            {/* Text Section */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: 4, md: 6 },
                mb: { xs: 6, md: 8 },
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

            {/* Feature Cards Grid */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "1fr 1fr",
                  md: "1fr 1fr 1fr 1fr",
                },
                gap: { xs: 4, sm: 4, md: 6 },
              }}
            >
              {FeatureCards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30, rotate: -2 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  whileHover={{
                    scale: 1.05,
                    y: -6,
                    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.25,
                    ease: [0.42, 0, 0.58, 1],
                    delay: i * 0.02,
                  }}
                  style={{
                    borderRadius: 20,
                    overflow: "hidden",
                    position: "relative",
                    willChange: "transform, box-shadow",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: { xs: 200, sm: 250, md: 280 },
                      position: "relative",
                      borderRadius: 4,
                      overflow: "hidden",
                    }}
                  >
                    {/* Animated Image */}
                    <motion.div
                      style={{
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        borderRadius: 20,
                        overflow: "hidden",
                      }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <Image
                        src={card.img}
                        alt={card.text}
                        fill
                        style={{
                          objectFit: "cover",
                          borderRadius: 20,
                        }}
                      />
                    </motion.div>

                    {/* Animated Full Overlay with Text */}
                    <motion.div
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      style={{
                        position: "absolute",
                        inset: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        padding: "16px",
                        borderRadius: "20px",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#fff",
                          fontWeight: 700,
                          fontSize: { xs: "12px", sm: "14px" },
                          textAlign: "left",
                          mt: 1,
                        }}
                      >
                        {card.text}
                      </Typography>
                    </motion.div>
                  </Box>
                </motion.div>
              ))}
            </Box>

            <Box>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "white",
                  textAlign: "center",
                  margin: "0px auto ",
                  padding: 6,
                }}
              >
                At Pagariya Homes, we don’t just design spaces—we create
                experiences that enhance your lifestyle.
              </Typography>
            </Box>
          </Container>
        </Box>
      </motion.div>
    </>
  );
};

export default Welcome;

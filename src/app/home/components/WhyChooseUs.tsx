// "use client";
// import { Container, Typography, Box } from "@mui/material";
// import { motion } from "framer-motion";

// const MotionBox = motion(Box);

// const MotionTypography = motion(Typography);

// const containerVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
//   },
// };

// const WhyChooseUs = () => {
//   return (
//     <MotionBox
//       variants={containerVariants}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }}
//     >
//       <Container sx={{ py: 2, textAlign: "center" }}>
//         <MotionTypography
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           sx={{ fontSize: "32px", fontWeight: 600, color: "black" }}
//           gutterBottom
//         >
//           WHY CHOOSE US?
//         </MotionTypography>

//         <motion.div
//           initial={{ scaleX: 0 }}
//           whileInView={{ scaleX: 1 }}
//           transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
//           style={{
//             transformOrigin: "center",
//             backgroundColor: "#FF6F00",
//             width: "45px",
//             height: "2.5px",
//             margin: "12px auto",
//           }}
//         />

//         <MotionTypography
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           sx={{ fontSize: "15px", color: "black" }}
//           gutterBottom
//         >
//           Decades of trust: Over 70 years of industry leadership. Certified
//           excellence: BIS, ISO, FDA, NABL-accredited quality standards.
//           Unmatched logistics: Fleet of 700+ commercial vehicles for safe,
//           timely deliveries. Customer-centric: 24/7 support, strong supplier
//           relations, transparent business ethics.
//         </MotionTypography>
//       </Container>
//     </MotionBox>
//   );
// };

// export default WhyChooseUs;

"use client";
import { Container, Typography, Box, Paper } from "@mui/material";
import { motion } from "framer-motion";

import VerifiedIcon from "@mui/icons-material/Verified";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const features = [
  {
    title: "70+ Years of Trust",
    description: "Established industry leader with a legacy of reliability.",
    icon: <VerifiedIcon sx={{ fontSize: 48, color: "#E66234" }} />,
  },
  {
    title: "Certified Quality",
    description: "BIS, ISO, FDA, NABL-accredited standards of excellence.",
    icon: <WorkspacePremiumIcon sx={{ fontSize: 48, color: "#E66234" }} />,
  },
  {
    title: "Powerful Logistics",
    description: "Fleet of 700+ vehicles ensures fast and safe delivery.",
    icon: <LocalShippingIcon sx={{ fontSize: 48, color: "#E66234" }} />,
  },
  {
    title: "Customer First",
    description: "24/7 support with transparent, ethical practices.",
    icon: <SupportAgentIcon sx={{ fontSize: 48, color: "#E66234" }} />,
  },
];

const WhyChooseUs = () => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      sx={{ py: 6 }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <MotionTypography
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            sx={{ fontSize: "36px", fontWeight: 700, color: "#333" }}
          >
            Why Choose Us?
          </MotionTypography>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            style={{
              transformOrigin: "center",
              backgroundColor: "#E66234",
              width: "50px",
              height: "3px",
              margin: "14px auto",
              borderRadius: "5px",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Paper
                elevation={5}
                sx={{
                  width: { xs: "100%", sm: "280px" },
                  p: 4,
                  borderRadius: "20px",
                  textAlign: "center",
                  backgroundColor: "#ffffff",
                  transition: "transform 0.3s ease, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 12px 24px rgba(0,0,0,0.12)",
                  },
                }}
              >
                <Box mb={2}>{feature.icon}</Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: "#222", mb: 1 }}
                >
                  {feature.title}
                </Typography>
                <Typography sx={{ fontSize: "14px", color: "#555" }}>
                  {feature.description}
                </Typography>
              </Paper>
            </motion.div>
          ))}
        </Box>
      </Container>
    </MotionBox>
  );
};

export default WhyChooseUs;

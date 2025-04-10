"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";

import Image1 from "../../../assets/img/team/Shri-Ujjwal.png";
import Image2 from "../../../assets/img/team/Shri-Ulhas.png";
import Image3 from "../../../assets/img/team/Umesh-ji.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Welcome = () => {
  const skewRef = useRef(null);

  return (
    <>
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
            MR. UJWAL PAGARIYA
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "16px" },
              mt: 2,
              textAlign: { xs: "center", md: "left" },
              color: "#444",
            }}
          >
            A distinguished Chartered Accountant, Ujwal Pagariya brings a unique
            combination of financial acumen and entrepreneurial vision to the
            Pagariya Group. With a strong background in trading, manufacturing,
            mining, and infrastructure, he has played a key role in driving the
            company’s financial and commercial success.
            <br />
            <br />
            His leadership focuses on strategic growth, business expansion, and
            cultivating long-term stakeholder relationships. With a steadfast
            commitment to innovation and operational excellence, he ensures that
            Pagariya Group remains on a path of continuous progress while
            maintaining the highest standards of governance.
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
              height: { xs: 200, sm: 300, md: 500 },
              position: "relative",
              borderRadius: 3,
              overflow: "hidden",
            }}
          >
            <Image
              src={Image1}
              alt="Pagariya Homes"
              fill
              style={{
                objectFit: "contain",
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
                  color: "#ffffff",
                }}
              >
                MR. ULHAS PAGARIYA
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "14px", sm: "16px" },
                  mt: 2,
                  textAlign: { xs: "center", md: "left" },
                  color: "#ffffff",
                }}
              >
                With nearly three decades of experience in operations
                management, Ulhas Pagariya is a driving force behind the
                group&#39;s industrial and technological advancements. His
                passion for engineering and innovation, coupled with deep
                expertise in industrial safety, makes him a vital pillar of the
                organization.
                <br />
                <br />
                Overseeing multiple facets of business operations, he is
                dedicated to efficiency, organizational excellence, and seamless
                execution. His forward-thinking approach in new product
                development further strengthens the Pagariya Group’s position as
                an industry leader.
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
                  height: { xs: 200, sm: 300, md: 500 },
                  position: "relative",
                  borderRadius: 3,
                  overflow: "hidden",
                }}
              >
                <Image
                  src={Image2}
                  alt="Pagariya Homes"
                  fill
                  style={{
                    objectFit: "contain",
                    borderRadius: 12,
                  }}
                  priority
                />
              </Box>
            </motion.div>
          </Box>
        </Box>
      </motion.div>

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
            MR. UMESH PAGARIYA
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "16px" },
              mt: 2,
              textAlign: { xs: "center", md: "left" },
              color: "#444",
            }}
          >
            A dynamic leader known for his boundless enthusiasm and ability to
            inspire, Umesh Pagariya plays a pivotal role in harmonizing
            stakeholder interests and maximizing the potential of his teams. His
            techno-commercial expertise has helped propel Pagariya Group into
            new heights across various industries.
            <br />
            <br />
            As one of the key directors of Pagariya Group, he has been
            instrumental in diversifying the business into sectors including
            Real Estate, Infrastructure, Trading, Healthcare, FMCG, Mining,
            Farming, Retail, and Hospitality. Following in the footsteps of his
            father, Shri Parasmal Uttamchandji Pagariya, he worked alongside his
            brothers to expand the company’s reach, making it one of the largest
            employers in Central India.
            <br />
            <br />A second-generation entrepreneur, Mr. Umesh has received
            numerous accolades, including the prestigious &quot;You are an
            Emperor - Decowood&quot; and the &quot;Certificate of Excellence -
            Lixil.&quot; Beyond business, his philanthropic spirit drives him to
            support those in need, reinforcing the Group’s commitment to social
            responsibility.
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
              height: { xs: 200, sm: 300, md: 500 },
              position: "relative",
              borderRadius: 3,
              overflow: "hidden",
            }}
          >
            <Image
              src={Image3}
              alt="Pagariya Homes"
              fill
              style={{
                objectFit: "contain",
                borderRadius: 12,
              }}
              priority
            />
          </Box>
        </motion.div>
      </Box>
    </>
  );
};

export default Welcome;

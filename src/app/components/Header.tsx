"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logos/logo6.png";
import { NavLinks } from "../constants/constants";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "white",
          boxShadow: 2,
          borderBottom: "1px solid #ffffff",
          zIndex: 1000,
          display: "flex",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            py: 3,
            maxWidth: "lg",
            width: "100%",
          }}
        >
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo"
              width={200}
              height={40}
              style={{ cursor: "pointer" }}
            />
          </Link>

          <Box
            component={motion.div}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            sx={{ display: { xs: "none", lg: "flex" }, gap: 4 }}
          >
            {NavLinks.map((link) => (
              <motion.div
                key={link.key}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <a href={link.href} style={{ textDecoration: "none" }}>
                  <ListItemText
                    primary={link.label}
                    sx={{
                      fontSize: "18px",
                      cursor: "pointer",
                      color: link.key === "home" ? "#E66234" : "black",
                      fontWeight: link.key === "home" ? "bold" : "normal",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: "#E66234",
                        transform: "translateY(-2px)",
                      },
                    }}
                  />
                </a>
              </motion.div>
            ))}
          </Box>

          <IconButton
            sx={{ display: { xs: "block", lg: "none" }, color: "black" }}
            onClick={() => setIsOpen(true)}
          >
            <Menu size={30} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Sidebar */}
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          {/* Close Button */}
          <IconButton onClick={() => setIsOpen(false)} sx={{ mb: 2 }}>
            <X />
          </IconButton>

          {/* Mobile Links */}
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            style={{ listStyle: "none", padding: 0, margin: 0 }}
          >
            {NavLinks.map((link) => (
              <motion.li
                key={link.key}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <ListItem
                  component="a"
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  sx={{ px: 2 }}
                >
                  <Link href={link.href} passHref legacyBehavior>
                    <ListItemText
                      primary={link.label}
                      sx={{
                        fontSize: "18px",
                        color: link.key === "home" ? "#E66234" : "black",
                        fontWeight: link.key === "home" ? "bold" : "normal",
                        transition: "color 0.3s ease",
                        "&:hover": {
                          color: "#E66234",
                          transform: "translateY(-2px)",
                        },
                      }}
                    />
                  </Link>
                </ListItem>
              </motion.li>
            ))}
          </motion.ul>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;

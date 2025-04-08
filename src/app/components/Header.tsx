"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  const pathSegment = pathname.split("/")[1];
  const companyKey =
    pathSegment === ""
      ? "default"
      : pathSegment === "pagariya-exports"
      ? "exports"
      : pathSegment;
  const currentLinks = NavLinks[companyKey] || NavLinks["default"];

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
          <Link href="/Pg" passHref>
            <Image
              src={Logo}
              alt="Logo"
              width={200}
              height={40}
              style={{ cursor: "pointer" }}
            />
          </Link>

          {/* Desktop Links */}
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
            {currentLinks.map((link) => (
              <motion.div
                key={link.href}
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
                      color: link.href === "#home" ? "#E66234" : "black",
                      fontWeight: link.href === "#home" ? "bold" : "normal",
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

          {/* Mobile Menu Button */}
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
          <IconButton onClick={() => setIsOpen(false)} sx={{ mb: 2 }}>
            <X />
          </IconButton>

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
            {currentLinks.map((link) => (
              <motion.li
                key={link.href}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <a href={link.href} style={{ textDecoration: "none" }}>
                  <ListItem onClick={() => setIsOpen(false)} sx={{ px: 2 }}>
                    <ListItemText
                      primary={link.label}
                      sx={{
                        fontSize: "18px",
                        color: link.href === "#home" ? "#E66234" : "black",
                        fontWeight: link.href === "#home" ? "bold" : "normal",
                        transition: "color 0.3s ease",
                        "&:hover": {
                          color: "#E66234",
                          transform: "translateY(-2px)",
                        },
                      }}
                    />
                  </ListItem>
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;

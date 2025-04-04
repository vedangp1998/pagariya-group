"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logos/logo6.png";
import { NavLinks } from "../constants/constants";

const Navbar = () => {
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
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
          padding: "12px 0px",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            py: 1,
            maxWidth: "lg",
            width: "100%",
          }}
        >
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo"
              width={230}
              height={50}
              style={{ cursor: "pointer" }}
            />
          </Link>

          <Box sx={{ display: { xs: "none", lg: "flex" }, gap: 4 }}>
            {NavLinks.map((link) => (
              <Link key={link.key} href={link.href} passHref>
                <ListItemText
                  primary={link.label}
                  sx={{
                    fontSize: "18px",
                    cursor: "pointer",
                    color: link.key === "home" ? "orange" : "black",
                    fontWeight: link.key === "home" ? "bold" : "normal",
                    "&:hover": { color: "orange" },
                  }}
                />
              </Link>
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
          <List>
            {NavLinks.map((link) => (
              <ListItem
                component="a"
                key={link.key}
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                <Link href={link.href} passHref>
                  <ListItemText
                    primary={link.label}
                    sx={{
                      fontSize: "18px",
                      color: link.key === "home" ? "orange" : "black",
                      fontWeight: link.key === "home" ? "bold" : "normal",
                      "&:hover": { color: "orange" },
                    }}
                  />
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;

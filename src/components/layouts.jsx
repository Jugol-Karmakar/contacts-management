import React from "react";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Drawer,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

const drawerWidth = 240;

const SIDEBAR_LINKS = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Add Contact", href: "/add-contacts" },
  { id: 3, name: "All Contacts", href: "/all-contacts" },
  { id: 4, name: "Favourites", href: "/favourites" },
  { id: 5, name: "Profile", href: "/profile" },
];

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* App bar header  */}

      <AppBar
        position="fixed"
        sx={{
          pl: `${drawerWidth}px`,
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "primary.light",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" noWrap component="div">
            <Link href="/" style={{ textDecoration: "none", color: "#2196f3" }}>
              Contact Management
            </Link>
          </Typography>

          {/* header links  */}

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ flexGrow: 0 }}>
              <Link
                href="/add-contacts"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="contained" sx={{ marginRight: "15px" }}>
                  Add Contacts
                </Button>
              </Link>

              <Link
                href="/all-contacts"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="contained">All Contacts</Button>
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* drawer sidebar menu */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          paddingY: 0,

          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRight: 0,
            backgroundColor: "#172030",
            color: "#00000",
          },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        ></Toolbar>

        {/* sidebar links  */}

        <Box
          sx={{
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
            padding: "10px",
          }}
        >
          {SIDEBAR_LINKS.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.href}
                style={{
                  textDecoration: "none",
                }}
              >
                <Button
                  fullWidth
                  sx={{
                    paddingY: "10px",
                    backgroundColor:
                      router.pathname === link.href
                        ? "primary.main"
                        : " #3e495e",
                    color: "primary.light",
                    borderRadius: 0,
                    marginBottom: "2px",
                    transition: "background-color 0.5s",
                    "&:hover": {
                      backgroundColor: "primary.main",
                    },
                    borderRadius: "10px",
                  }}
                >
                  {link.name}
                </Button>
              </Link>
            );
          })}
        </Box>
      </Drawer>

      {/* children or main component  */}

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

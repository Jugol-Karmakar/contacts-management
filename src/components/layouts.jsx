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

const drawerWidth = 240;

export default function Layout({ children }) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          pl: `${drawerWidth}px`,
          zIndex: (theme) => theme.zIndex.drawer + 1,
          background: "linear-gradient(to right, #00c5fb 0%, #0253cc 100%)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" noWrap component="div">
            Contact Management
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ flexGrow: 0 }}>
              <Button>
                <Link href="/add-contacts">Add Contacts</Link>
              </Button>
              <Button>
                <Link href="/all-contacts">All Contacts</Link>
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
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
            backgroundColor: "#34444c",
            color: "#fff",
          },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        ></Toolbar>
        <Box
          sx={{ overflow: "auto", display: "flex", flexDirection: "column" }}
        >
          <Button fullWidth sx={{ paddingY: "10px" }}>
            <Link
              href="/add-contacts"
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              Add Contact
            </Link>
          </Button>
          <Button>
            <Link
              href="/all-contacts"
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              All Contact
            </Link>
          </Button>
          <Button>
            <Link
              href="/favourites"
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              favourites
            </Link>
          </Button>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

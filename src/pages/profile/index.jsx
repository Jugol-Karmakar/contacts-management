import React from "react";
import Layout from "@/components/layouts";
import {
  Avatar,
  Box,
  Container,
  Divider,
  Paper,
  Typography,
} from "@mui/material";

export default function Profile() {
  return (
    <Layout>
      <Container>
        <Paper
          sx={{
            display: "flex",
            alignItems: "center",
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 2,
            padding: "15px",
          }}
        >
          <Box>
            <Avatar
              alt="profile-image"
              src="../../../public/assets/images/profile.avif"
              sx={{ width: 150, height: 150 }}
            />
          </Box>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Box sx={{}}>
            <Typography>User another Infromation</Typography>
          </Box>
        </Paper>
      </Container>
    </Layout>
  );
}

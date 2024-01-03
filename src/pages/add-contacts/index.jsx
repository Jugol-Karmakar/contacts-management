import Layout from "@/components/layouts";
import {
  Box,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

export default function AddContacts() {
  return (
    <Layout>
      <Box>
        <Typography
          sx={{
            fontSize: "24px",
            paddingBottom: "10px",
            fontWeight: 500,
            color: "primary.main",
          }}
        >
          Add Contacts
        </Typography>
        <Divider />
      </Box>

      <Container>
        <Grid container spacing={3}>
          <Grid item sx={6}>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </Grid>
          <Grid item sx={6}>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </Grid>
          <Grid item sx={6}>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </Grid>
          <Grid item sx={6}>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

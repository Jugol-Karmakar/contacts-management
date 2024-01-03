import ContactCard from "@/components/contact-card";
import Layout from "@/components/layouts";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function AllContacts() {
  const [allContacts, setAllContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/contacts", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setAllContacts(data));
  }, []);
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
          All Contacts
        </Typography>
        <Divider />
      </Box>

      <Container sx={{ paddingY: "25px" }}>
        <Grid container spacing={4}>
          {allContacts.map((contact) => (
            <Grid item xs={4} key={contact._id}>
              <ContactCard contact={contact} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
}

import React from "react";
import ContactCard from "@/components/contact-card";
import Layout from "@/components/layouts";
import useContacts from "@/hooks/useContacts";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";

export default function AllContacts() {
  // const [allContacts, setAllContacts] = useState([]);
  // useEffect(() => {
  //   fetch(" http://localhost:5000/contacts", {
  //     method: "GET",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setAllContacts(data));
  // }, []);

  // using hooks
  const [allContacts, setAllContacts] = useContacts();

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
          {allContacts
            .slice()
            .reverse()
            .map((contact) => (
              <Grid item xs={4} key={contact._id}>
                {/* single product card*/}
                <ContactCard
                  contact={contact}
                  allContacts={allContacts}
                  setAllContacts={setAllContacts}
                />
              </Grid>
            ))}
        </Grid>
      </Container>
    </Layout>
  );
}

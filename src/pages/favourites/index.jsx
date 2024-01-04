import FavouriteCard from "@/components/favourite-card";
import Layout from "@/components/layouts";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function Favourites() {
  const [myFavourite, setMyFavourite] = useState([]);

  // get favourite contact
  useEffect(() => {
    fetch("http://localhost:5000/contacts", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        const update = data.filter(
          (favourite) => favourite.role === "favourite"
        );
        setMyFavourite(update);
      });
  }, []);

  return (
    <Layout>
      <Box sx={{ paddingBottom: "25px", paddingTop: "10px" }}>
        <Typography
          sx={{
            fontSize: "24px",
            paddingBottom: "10px",
            fontWeight: 500,
            color: "primary.main",
          }}
        >
          Favourite Contacts
        </Typography>
        <Divider />
      </Box>

      {/* favourite item card  */}
      <Container>
        <Grid container spacing={4}>
          {myFavourite.map((favourite) => (
            <Grid item xs={4} key={favourite._id}>
              <FavouriteCard favourite={favourite} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
}

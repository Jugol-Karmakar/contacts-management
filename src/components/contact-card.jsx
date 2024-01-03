import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

export default function ContactCard({ contact }) {
  //   console.log(contact);
  return (
    <>
      <Card>
        <CardMedia>
          <img
            width={400}
            height={300}
            src={contact.image}
            alt="profile-image"
          />
        </CardMedia>
        <CardContent>
          <Typography>{contact.name}</Typography>
          <Typography>{contact.email}</Typography>
          <Typography>{contact.phone}</Typography>
          <Typography>{contact.address}</Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button fullWidth variant="contained">
              Update
            </Button>
            <Button fullWidth variant="outlined">
              Delete
            </Button>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}

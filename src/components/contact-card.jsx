import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import ContactModal from "./contact-modal";
import useContacts from "@/hooks/useContacts";
import StarIcon from "@mui/icons-material/Star";

export default function ContactCard({ contact }) {
  // console.log(contact);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // using hooks
  const [allContacts, setAllContacts] = useContacts();

  // delete a product
  const handleDeleteItem = (id) => {
    console.log("deleting contact", id);
    const proceed = window.confirm("are you sure want to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/contacts/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const result = allContacts.filter((cont) => cont._id !== id);
            setAllContacts(result);
          }
        });
    }
  };

  // add to favourite contact
  const handleAddFavourite = (id) => {
    console.log("add favourite id", id);

    fetch(`http://localhost:5000/contacts/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          console.log("update");
        }
      });
  };

  return (
    <>
      <Card sx={{ position: "relative" }}>
        {contact.role !== "favourite" ? (
          <Button
            onClick={() => handleAddFavourite(contact._id)}
            variant="contained"
            sx={{
              position: "absolute",
              top: 5,
              right: 5,
              textTransform: "capitalize",
              borderRadius: "0",
              fontSize: "14px",
            }}
          >
            Add to favourite
          </Button>
        ) : (
          <StarIcon
            sx={{
              position: "absolute",
              top: 5,
              right: 5,
              color: "yellow",
              fontSize: "36px",
            }}
          />
        )}

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
            <Button fullWidth variant="contained" onClick={handleClickOpen}>
              Update
            </Button>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => handleDeleteItem(contact._id)}
            >
              Delete
            </Button>
          </Box>
        </CardContent>

        {/* open modal component  */}
        <ContactModal
          open={open}
          setOpen={setOpen}
          handleClose={handleClose}
          handleClickOpen={handleClickOpen}
        />
      </Card>
    </>
  );
}

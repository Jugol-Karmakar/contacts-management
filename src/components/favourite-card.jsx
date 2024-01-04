import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export default function FavouriteCard({ favourite }) {
  return (
    <>
      <Card sx={{ position: "relative" }}>
        {favourite.role === "favourite" && (
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
            src={favourite.image}
            alt="profile-image"
          />
        </CardMedia>
        <CardContent>
          <Typography>{favourite.name}</Typography>
          <Typography>{favourite.email}</Typography>
          <Typography>{favourite.phone}</Typography>
          <Typography>{favourite.address}</Typography>
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

import Layout from "@/components/layouts";
import {
  Alert,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

export default function AddContacts() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const addContact = data;
    fetch(" http://localhost:5000/add-contact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addContact),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == 200) {
          return (
            <Alert severity="success" color="info">
              Contact add successfully
            </Alert>
          );
        }

        console.log(data);
      });

    reset();
  };

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

      <Container sx={{ paddingY: "25px" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid
            container
            spacing={4}
            sx={{ paddingX: "25px", display: "flex", justifyContent: "center" }}
          >
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Full Name"
                variant="outlined"
                type="name"
                name="name"
                {...register("name", {
                  required: "Name is required",
                })}
                error={Boolean(errors?.name)}
                helperText={errors.name?.message}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Email Address"
                variant="outlined"
                type="email"
                name="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid email",
                  },
                })}
                error={Boolean(errors?.email)}
                helperText={errors.email?.message}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
                type="number"
                name="phone"
                {...register("phone", {
                  required: "Number is required",
                  maxLength: {
                    value: 11,
                    message: "number length less then 11",
                  },
                  minLength: {
                    value: 6,
                    message: "number length must be 6",
                  },
                })}
                error={Boolean(errors?.phone)}
                helperText={errors.phone?.message}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Address"
                variant="outlined"
                type="address"
                name="address"
                {...register("address", {
                  required: "Address is required",
                })}
                error={Boolean(errors?.address)}
                helperText={errors.address?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Image link"
                variant="outlined"
                type="text"
                name="image"
                {...register("image", {
                  required: "Image link is required",
                })}
                error={Boolean(errors?.image)}
                helperText={errors.image?.message}
              />
            </Grid>
            <Grid item xs={4}>
              <Button fullWidth type="submit" variant="contained">
                submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Layout>
  );
}

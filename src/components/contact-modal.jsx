import {
  Box,
  Button,
  Dialog,
  Divider,
  Grid,
  Slide,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ContactModal({ open, handleClose }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <Box>
          <Typography
            sx={{
              fontSize: "24px",
              padding: "20px",
              paddingBottom: "10px",
              fontWeight: 500,
              color: "primary.main",
            }}
          >
            Update Contact Details
          </Typography>
          <Divider />
        </Box>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid
            container
            spacing={4}
            sx={{
              padding: "25px",
              display: "flex",
              justifyContent: "center",
            }}
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
      </Dialog>
    </React.Fragment>
  );
}

import Layout from "@/components/layouts";
import { Box, Button, Container, Divider, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
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
            Home Page
          </Typography>
          <Divider />
        </Box>
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              paddingTop: "50px",
            }}
          >
            <Typography
              sx={{ fontSize: "34px", fontWeight: 600, paddingY: "15px" }}
            >
              Contact Management System
            </Typography>
            <Typography sx={{}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              molestiae quam rerum quis nobis, <br /> maxime vero ab? Veritatis
              nemo facilis voluptas possimus pariatur hic quis consequuntur
              error soluta, sint vitae?
            </Typography>
          </Box>
        </Container>
      </Layout>
    </>
  );
}

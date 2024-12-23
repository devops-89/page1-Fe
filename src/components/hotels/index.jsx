import { COLORS } from "@/utils/colors";
import { nunito, raleway } from "@/utils/fonts";
import { ArrowForwardIos } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import HotelCard from "./hotelCard";
import { data } from "@/assests/data";

const Hotel = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box>
            <Typography
              sx={{
                color: COLORS.SECONDARY,
                textTransform: "uppercase",
                fontFamily: raleway.style,
                fontWeight: 600,
                letterSpacing: 1.2,
              }}
            >
              Hotels
            </Typography>
            <Typography
              sx={{ fontFamily: nunito.style, fontSize: 40, fontWeight: 700 }}
            >
              Our Exquisite Hotels
            </Typography>
          </Box>
          <Button
            sx={{
              fontSize: 14,
              fontFamily: raleway.style,
              fontWeight: 500,
              color: COLORS.BLACK,
            }}
            endIcon={<ArrowForwardIos sx={{ fontSize: 14 }} />}
          >
            View All
          </Button>
        </Stack>

        <Grid2 container spacing={4} mt={3}>
          {data.hotelName.map((val, i) => (
            <Grid2 size={3} key={i}>
              <HotelCard
                img={val.img}
                hotelName={val.hotelName}
                rooms={val.rooms}
                rating={val.rating}
                bathroom={val.bathroom}
                location={val.location}
                price={val.price}
                follower={val.follower}
              />
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </div>
  );
};

export default Hotel;

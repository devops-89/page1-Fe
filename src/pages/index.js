import Banner from "@/components/banner";
import Services from "@/components/services";
import styles from "@/styles/Home.module.css";
import { Box, CardActionArea, Divider, Grid2 } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import visa from "@/services/visa.png";
import exclusive from "@/services/exclusive.png";
import { COLORS } from "@/utils/colors";
import Festivals from "@/components/festivals";
import SubscribeBanner from "@/components/subscribeBanner";
import Hotel from "@/components/hotels";
import About from "@/components/aboutus";
import Testimonials from "@/components/testimonial/testimonials";
import Faq from "@/components/faq";
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Banner />
        <Box>
          <Services />
        </Box>
        <Box>
          <About />
        </Box>
        {/* <Box sx={{ pt: 10 }}>
          <Grid2 container>
            <Grid2 size={6} margin={"auto"} sx={{ p: 2, border: "" }}>
              <CardActionArea>
                <Grid2
                  container
                  sx={{
                    border: `2px solid ${COLORS.DARKGREY}`,
                    pt: 4,
                    borderRadius: 2,
                    pb: 4,
                  }}
                  spacing={2}
                >
                  <Grid2 size={5.5} textAlign={"center"}>
                    <Image src={visa} width={250} />
                  </Grid2>
                  <Grid2
                    size={1}
                    textAlign={"center"}
                    sx={{ position: "relative" }}
                  >
                    <Divider
                      sx={{
                        borderColor: COLORS.DARKGREY,
                        margin: "auto",
                        position: "absolute",
                        left: "50%",
                        borderWidth: 1,
                      }}
                      orientation="vertical"
                    />
                  </Grid2>

                  <Grid2 size={5.5} textAlign={"center"}>
                    <Image src={exclusive} width={250} />
                  </Grid2>
                </Grid2>
              </CardActionArea>
            </Grid2>
          </Grid2>
        </Box> */}
        <Box sx={{ pt: 10 }}>
          <Festivals />
        </Box>
        <Box sx={{ pt: 10 }}>
          <SubscribeBanner />
        </Box>
        <Box sx={{ pt: 10 }}>
          <Hotel />
        </Box>
        <Box sx={{ pt: 10 }}>
          <Testimonials />
        </Box>
        <Box sx={{ pt: 10 }}>
          <Faq />
        </Box>
      </Box>
    </>
  );
}

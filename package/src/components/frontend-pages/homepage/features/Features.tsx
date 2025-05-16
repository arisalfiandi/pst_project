import { Box, Stack, Typography, Grid, Container } from "@mui/material";
import FeatureTitle from "./FeatureTitle";

import icon1 from "@/assets/images/group2.svg";
import iconEcon from "@/assets/images/moneybag.svg";
import iconProd from "@/assets/images/palm-tree.svg";
import Screen1 from "@/assets/images/frontend-pages/homepage/screen1.png";
import IconBubble from "@/assets/images/svgs/icon-speech-bubble.svg";
import IconFav from "@/assets/images/svgs/icon-favorites.svg";
import Image from "next/image";

const Features = () => {
  return (
    <Box pt={10} pb={7}>
      <Container
        maxWidth="lg"
        sx={{
          pb: {
            xs: "30px",
            lg: "60px",
          },
        }}
      >
        <FeatureTitle />

        <Grid container spacing={5} mt={3}>
          <Grid item xs sm={6} lg>
            <Box
              textAlign="center"
              mb={3}
              bgcolor="secondary.light"
              borderRadius="24px"
            >
              <Box px={4} py="65px">
                <Stack direction="column" spacing={2} textAlign="center">
                  <Box textAlign="center">
                    <Image src={icon1} alt="icon1" width={70} height={70} />
                  </Box>
                  <Typography variant="h5" fontWeight={700}>
                    Statistik Demografi dan Sosial
                  </Typography>
                  <Typography variant="body1" fontWeight={400}>
                    Kependudukan, Tenaga Kerja, Pendidikan, Kesehatan, Pemukiman
                    dan Perumahan, Konsumsi dan Pendapatan, dll.
                  </Typography>
                </Stack>
              </Box>
            </Box>
          </Grid>
          <Grid item xs sm={6} lg>
            <Box mb={3} bgcolor="warning.light" borderRadius="24px">
              <Box px={4} py="65px">
                <Stack direction="column" spacing={2} textAlign="center">
                  <Box textAlign="center">
                    <Image src={iconEcon} alt="icon1" width={70} height={70} />
                  </Box>
                  <Typography variant="h5" fontWeight={700}>
                    Statistik Ekonomi
                  </Typography>
                  <Typography variant="body1" fontWeight={400}>
                    PDRB, Neraca Ekonomi, Bisnis, Keuangan Pemerintah,
                    Harga-Harga, Pertanian, Kehutanan, Perikanan, Energi,
                    Pariwisata dll.
                  </Typography>
                </Stack>
              </Box>
            </Box>
          </Grid>
          {/* <Grid
            item
            xs={12}
            lg={5}
            sx={{
              order: {
                xs: 3,
                lg: 2,
              },
            }}
          >
            <Box
              textAlign="center"
              mb={3}
              bgcolor="primary.light"
              borderRadius="24px"
            >
              <Box pt="65px" pb="40px" px={5}>
                <Image src={LogoIcon} alt="logo" height="50" width="50" />
                <Typography
                  variant="h2"
                  fontWeight="700"
                  mt={4}
                  sx={{
                    fontSize: {
                      lg: "40px",
                      xs: "35px",
                    },
                  }}
                >
                  New Demos
                </Typography>
                <Typography variant="body1" mt={2}>
                  Brand new demos to help you build the perfect dashboard:{" "}
                  <Typography component="span" fontWeight={600}>
                    Dark and Right-to-Left.
                  </Typography>
                </Typography>
                <Box mt={5} mb={2}>
                  <Image
                    src={Screen1}
                    alt="icon1"
                    width={405}
                    height={245}
                    style={{ width: "100%", height: "auto" }}
                  />
                </Box>
              </Box>
            </Box>
          </Grid> */}
          <Grid
            item
            xs
            sm={6}
            lg
            sx={{
              order: {
                xs: 2,
                lg: 3,
              },
            }}
          >
            <Box
              textAlign="center"
              mb={3}
              bgcolor="success.light"
              borderRadius="24px"
            >
              <Box px={4} py="65px">
                <Stack direction="column" spacing={2} textAlign="center">
                  <Box textAlign="center">
                    <Image src={iconProd} alt="icon1" width={70} height={70} />
                  </Box>
                  <Typography variant="h5" fontWeight={700}>
                    Statistik Lingkungan Hidup dan Multi-domain
                  </Typography>
                  <Typography variant="body1" fontWeight={400}>
                    {" "}
                    Lingkungan, Globalisasi, Kewiraswastaan, Gender, Statistik
                    Regional, dll.
                  </Typography>
                </Stack>
              </Box>
            </Box>
            {/* <Box
              textAlign="center"
              mb={3}
              bgcolor="error.light"
              borderRadius="24px"
            >
              <Box px={4} py="65px">
                <Stack direction="column" spacing={2} textAlign="center">
                  <Box textAlign="center">
                    <Image src={IconFav} alt="icon1" width={40} height={40} />
                  </Box>
                  <Typography variant="h6" fontWeight={700}>
                    50+ UI Components
                  </Typography>
                  <Typography variant="body1">
                    {" "}
                    A rich collection for seamless user experiences.
                  </Typography>
                </Stack>
              </Box>
            </Box> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;

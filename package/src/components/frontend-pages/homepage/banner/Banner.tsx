import React from "react";
import {
  Box,
  Stack,
  Typography,
  Container,
  Grid,
  Button,
  useTheme,
  Link,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Tooltip from "@mui/material/Tooltip";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

// icons
import icon1 from "@/assets/images/frontend-pages/icons/icon-react.svg";
import icon2 from "@/assets/images/frontend-pages/icons/icon-mui.svg";
import icon3 from "@/assets/images/frontend-pages/icons/icon-next.svg";
import icon4 from "@/assets/images/frontend-pages/icons/icon-ts.svg";
import icon5 from "@/assets/images/frontend-pages/icons/icon-redux.svg";
import icon6 from "@/assets/images/frontend-pages/icons/icon-tabler.svg";

import BannerTopLeft from "@/assets/images/frontend-pages/homepage/banner-top-left.svg";
import BannerBottomPart from "@/assets/images/frontend-pages/homepage/bottom-part.svg";
import BannerTopRight from "@/assets/images/frontend-pages/homepage/banner-top-right.svg";

import user1 from "@/assets/images/profile/user-1.jpg";
import user2 from "@/assets/images/profile/user-2.jpg";
import user3 from "@/assets/images/profile/user-3.jpg";

import iconPlay from "@/assets/images/frontend-pages/homepage/icon-play.svg";
import Image from "next/image";

import heroImg from "@/assets/images/man-with-laptop-analyzing-infographics-diagram-bar-chart-report-flat-vector-illustration-analysis-marketing-project-manager.png";

const Frameworks = [
  {
    name: "React",
    icon: icon1,
  },
  {
    name: "Material Ui",
    icon: icon2,
  },
  {
    name: "React",
    icon: icon3,
  },
  {
    name: "Typescript",
    icon: icon4,
  },
  {
    name: "Redux",
    icon: icon5,
  },
  {
    name: "Tabler Icon",
    icon: icon6,
  },
];
const Banner = () => {
  const theme = useTheme();
  //   sidebar
  const lgUp = useMediaQuery(theme.breakpoints.up("lg"));

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box bgcolor="primary.light" py={6}>
      <Container
        sx={{
          maxWidth: "1400px !important",
          position: "relative",
        }}
      >
        <Grid container spacing={3} justifyContent="center" mb={4} pb={5}>
          <Grid item xs={12} lg={6} textAlign="center" alignContent="center">
            <Stack spacing={3}>
              <Typography
                variant="h1"
                fontWeight={700}
                lineHeight="1.2"
                sx={{
                  fontSize: {
                    xs: "40px",
                    sm: "56px",
                  },
                  textAlign: "left",
                }}
              >
                Pelayanan Statistik Terpadu{" "}
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: {
                      xs: "40px",
                      sm: "56px",
                    },
                  }}
                  fontWeight={700}
                  component="span"
                  color="warning.main"
                >
                  BPS Halmahera Selatan
                </Typography>
              </Typography>
              <Typography
                variant="h5"
                fontWeight={200}
                lineHeight="1.2"
                sx={{
                  textAlign: "left",
                }}
              >
                Selamat datang di Pelayanan Statistik Terpadu BPS Halmahera
                Selatan. Di website ini Anda dapat menemukan berbagai layanan
                yang kami sediakan dan informasi kontak yang dapat dihubungi.
                #MelayaniDenganHati❤️
              </Typography>
              <Stack direction="row" spacing={2} py={1}>
                <Link>
                  <Button variant="contained" color="warning" href="/daftar">
                    Ambil Tiket PST
                  </Button>
                </Link>

                <Link>
                  <Button
                    variant="outlined"
                    sx={{
                      color: "rgba(71, 77, 81, 0.74)",
                      borderColor: "rgba(71, 77, 81, 0.74)",
                      "&:hover": {
                        backgroundColor: "rgba(137, 142, 145, 0.46)",
                        borderColor: "rgba(108, 123, 132, 0.61)",
                      },
                    }}
                    href="/antrian-tiket"
                  >
                    Lihat Antrian
                  </Button>
                </Link>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} lg={6} textAlign="center" pb={7}>
            <Image
              src={heroImg}
              width="850"
              height="517"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              // placeholder="blur"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;

import React from "react";
import {
  Box,
  Grid,
  Typography,
  Container,
  Divider,
  Stack,
  Tooltip,
  Link,
} from "@mui/material";
import { NavLink } from "react-router-dom";

import IconFacebook from "@/assets/images/frontend-pages/icons/icon-facebook.svg";
import IconTwitter from "@/assets/images/frontend-pages/icons/icon-twitter.svg";
import IconInstagram from "@/assets/images/frontend-pages/icons/icon-instagram.svg";
import Image from "next/image";

import LogoIcon from "@/assets/images/logos/logoIcon.svg";

const Footer = () => {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          pt: {
            xs: "30px",
            lg: "60px",
          },
        }}
      >
        <Grid container spacing={5} justifyContent="space-between" mb={7}>
          {/* {footerLinks.map((footerlink, i) => (
            <Grid item xs={6} sm={4} lg={2} key={i}>
              {footerlink.children.map((child, i) => (
                <React.Fragment key={i}>
                  {child.title ? (
                    <Typography fontSize="17px" fontWeight="600" mb="22px">
                      {child.titleText}
                    </Typography>
                  ) : (
                    <Link to={`${child.link}`}>
                      <Typography
                        sx={{
                          display: "block",
                          padding: "10px 0",
                          fontSize: "15px",
                          color: (theme) => theme.palette.text.primary,
                          "&:hover": {
                            color: (theme) => theme.palette.primary.main,
                          },
                        }}
                        component="span"
                      >
                        {child.titleText}
                      </Typography>
                    </Link>
                  )}
                </React.Fragment>
              ))}
            </Grid>
          ))} */}
          <Grid item xs={6} sm={6} lg={6}>
            <Typography fontSize="17px" fontWeight="600" mb="22px">
              Hubungi Kami
            </Typography>
            <Typography
              sx={{
                display: "block",
                padding: "10px 0",
                fontSize: "15px",
                color: (theme) => theme.palette.text.primary,
              }}
              component="span"
            >
              Badan Pusat Statistik Kabupaten Halmahera Selatan (Statistics of
              Halmahera Selatan Regency)
            </Typography>

            <Link
              href="https://maps.app.goo.gl/GLe7Nr61YoicrpJH6"
              underline="none"
              target="_blank"
            >
              <Typography
                sx={{
                  display: "block",
                  padding: "10px 0",
                  fontSize: "15px",
                  color: (theme) => theme.palette.text.primary,
                  "&:hover": {
                    color: (theme) => theme.palette.primary.main,
                  },
                }}
                component="span"
              >
                Jl. Karet Putih Labuha 97791
              </Typography>
            </Link>
            <Typography
              sx={{
                display: "block",
                padding: "10px 0",
                fontSize: "15px",
                color: (theme) => theme.palette.text.primary,
                "&:hover": {
                  color: (theme) => theme.palette.primary.main,
                },
              }}
              component="span"
            >
              Telp (62-927) 2321318
            </Typography>
            <Typography
              sx={{
                display: "block",
                padding: "10px 0",
                fontSize: "15px",
                color: (theme) => theme.palette.text.primary,
                "&:hover": {
                  color: (theme) => theme.palette.primary.main,
                },
              }}
              component="span"
            >
              Faks (62-927) 2321318
            </Typography>
            <Link underline="none" href="mailto:bps8204@bps.go.id">
              <Typography
                sx={{
                  display: "block",
                  padding: "10px 0",
                  fontSize: "15px",
                  color: (theme) => theme.palette.text.primary,
                  "&:hover": {
                    color: (theme) => theme.palette.primary.main,
                  },
                }}
                component="span"
              >
                Mailbox : bps8204@bps.go.id
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={6} sm={6} lg={3} textAlign="right">
            <Typography fontSize="17px" fontWeight="600" mb="22px">
              Tentang Kami
            </Typography>

            <Link
              underline="none"
              href="https://halmaheraselatankab.bps.go.id/id"
              target="_blank"
            >
              <Typography
                sx={{
                  display: "block",
                  padding: "10px 0",
                  fontSize: "15px",
                  color: (theme) => theme.palette.text.primary,
                  "&:hover": {
                    color: (theme) => theme.palette.primary.main,
                  },
                }}
                component="span"
              >
                Website BPS
              </Typography>
            </Link>
            <Link
              underline="none"
              href="https://ppid.bps.go.id/app/konten/8204/Profil-BPS.html?_gl=1*lf3gpb*_ga*Njc5NDExMzc0LjE3Mzk4NDE1MjI.*_ga_XXTTVXWHDB*czE3NDczNTEyNzckbzQ3JGcxJHQxNzQ3MzUyNDM0JGowJGwwJGgw"
              target="_blank"
            >
              <Typography
                sx={{
                  display: "block",
                  padding: "10px 0",
                  fontSize: "15px",
                  color: (theme) => theme.palette.text.primary,
                  "&:hover": {
                    color: (theme) => theme.palette.primary.main,
                  },
                }}
                component="span"
              >
                Profil BPS
              </Typography>
            </Link>
            <Link
              underline="none"
              href="https://ppid.bps.go.id/app/konten/0000/Layanan-BPS.html?_gl=1*18z0j2n*_ga*Njc5NDExMzc0LjE3Mzk4NDE1MjI.*_ga_XXTTVXWHDB*czE3NDczNTU4MzkkbzQ4JGcxJHQxNzQ3MzU1OTU1JGowJGwwJGgw#pills-3"
              target="_blank"
            >
              <Typography
                sx={{
                  display: "block",
                  padding: "10px 0",
                  fontSize: "15px",
                  color: (theme) => theme.palette.text.primary,
                  "&:hover": {
                    color: (theme) => theme.palette.primary.main,
                  },
                }}
                component="span"
              >
                PPID
              </Typography>
            </Link>
            <Link
              underline="none"
              href="https://ppid.bps.go.id/app/konten/0000/Layanan-BPS.html?_gl=1*5tnwle*_ga*Njc5NDExMzc0LjE3Mzk4NDE1MjI.*_ga_XXTTVXWHDB*czE3NDczNTU4MzkkbzQ4JGcxJHQxNzQ3MzU1OTU1JGowJGwwJGgw#pills-3"
              target="_blank"
            >
              <Typography
                sx={{
                  display: "block",
                  padding: "10px 0",
                  fontSize: "15px",
                  color: (theme) => theme.palette.text.primary,
                  "&:hover": {
                    color: (theme) => theme.palette.primary.main,
                  },
                }}
                component="span"
              >
                Kebijakan Diseminasi
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={6} sm={6} lg={3} textAlign="right">
            <Typography fontSize="17px" fontWeight="600" mb="22px">
              Ikuti kami
            </Typography>
            <Tooltip title="Instagram">
              <Link
                href="https://www.instagram.com/bpshalsel?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                underline="none"
                target="_blank"
              >
                <Image
                  src={IconInstagram}
                  alt="instagram"
                  width={22}
                  height={22}
                />
              </Link>
            </Tooltip>

            {/* <Stack direction="row" gap="20px">
              <Tooltip title="Facebook">
                <NavLink to="#">
                  <Image
                    src={IconFacebook}
                    alt="facebook"
                    width={22}
                    height={22}
                  />
                </NavLink>
              </Tooltip>
              <Tooltip title="Twitter">
                <NavLink to="#">
                  <Image
                    src={IconTwitter}
                    alt="twitter"
                    width={22}
                    height={22}
                  />
                </NavLink>
              </Tooltip>
            </Stack> */}
          </Grid>
        </Grid>

        <Divider />

        {/* <Box
          py="40px"
          flexWrap="wrap"
          display="flex"
          justifyContent="space-between"
        >
          <Stack direction="row" gap={1} alignItems="center">
            <Image src={LogoIcon} width={20} height={20} alt="logo" />
            <Typography variant="body1" fontSize="15px">
              All rights reserved by Modernize.{" "}
            </Typography>
          </Stack>
          <Typography variant="body1" fontSize="15px">
            Produced by{" "}
            <Typography
              component={Link}
              color="primary.main"
              to="https://adminmart.com/"
            >
              AdminMart
            </Typography>
            .
          </Typography>
        </Box> */}
      </Container>
    </>
  );
};

export default Footer;

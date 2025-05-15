import React from "react";
import {
  Box,
  Stack,
  Typography,
  AvatarGroup,
  Avatar,
  Container,
  Grid,
  Button,
  useTheme,
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
    <Box bgcolor="primary.light" pt={7}>
      <Container
        sx={{
          maxWidth: "1400px !important",
          position: "relative",
        }}
      >
        <Grid container spacing={3} justifyContent="center" mb={4}>
          <Grid item xs={12} lg={7} textAlign="center">
            <Typography
              variant="h1"
              fontWeight={700}
              lineHeight="1.2"
              sx={{
                fontSize: {
                  xs: "40px",
                  sm: "56px",
                },
              }}
            >
              Most powerful &{" "}
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
                color="primary.main"
              >
                developer friendly
              </Typography>{" "}
              dashboard
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;

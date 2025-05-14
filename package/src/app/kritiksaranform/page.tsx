"use client";
import Link from "next/link";
import {
  Grid,
  Box,
  Card,
  CardHeader,
  CardContent,
  Divider,
  TextField,
  Button,
  Stack,
  useTheme,
  Typography,
  Rating,
} from "@mui/material";
// components
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import Logo from "@/app/(DashboardLayout)/layout/shared/logo/Logo";
import React from "react";
const kritiksaran = () => {
  const theme = useTheme();
  const borderColor = theme.palette.divider;
  const [value, setValue] = React.useState<number | null>(2);
  return (
    <PageContainer
      title="Kritik dan Saran"
      description="this is kritiksaran page"
    >
      <Box
        sx={{
          position: "relative",
          "&:before": {
            content: '""',
            background: "radial-gradient(#d2f1df, #d3d7fa, #bad8f4)",
            backgroundSize: "400% 400%",
            animation: "gradient 15s ease infinite",
            position: "absolute",
            height: "100%",
            width: "100%",
            opacity: "0.3",
          },
        }}
      >
        <Grid
          container
          spacing={0}
          justifyContent="center"
          sx={{ height: "100vh" }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            lg={4}
            xl={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Card
              elevation={9}
              sx={{ mx: 1, zIndex: 1, width: "100%", maxWidth: "500px" }}
            >
              <CardHeader
                title="Kritik dan Saran"
                sx={{ my: 1, fontSize: 70 }}
              />
              <Divider />
              <CardContent>
                <form>
                  <Stack spacing={3} mb={3} mt={1}>
                    <TextField
                      sx={{ borderColor: theme.palette.grey[200] }}
                      id="notiket"
                      label="Nomor Tiket"
                      autoComplete="current-notiket"
                    />
                    <TextField
                      id="kritikdansaran"
                      label="Kritik dan Saran"
                      multiline
                      minRows={5}
                      autoComplete="current-kritikdansaran"
                    />
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Rating
                        name="simple-controlled"
                        sx={{ fontSize: 50 }}
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                      />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Button color="primary" variant="contained">
                        Submit
                      </Button>
                    </div>
                  </Stack>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};
export default kritiksaran;

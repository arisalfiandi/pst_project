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
} from "@mui/material";
// components
import PageContainer from "@/app/dashboard/components/container/PageContainer";
import Logo from "@/app/dashboard/layout/shared/logo/Logo";
const daftar = () => {
  const theme = useTheme();
  const borderColor = theme.palette.divider;
  return (
    <PageContainer title="Daftar" description="this is Daftar page">
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
              <CardHeader title="Ambil Tiket PST" sx={{ my: 1 }} />
              <Divider />
              <CardContent>
                <form>
                  <Stack spacing={3} mb={3} mt={1}>
                    <TextField
                      sx={{ borderColor: theme.palette.grey[200] }}
                      id="outlined-nama-input"
                      label="Nama"
                      autoComplete="current-nama"
                    />
                    <TextField
                      id="outlined-asal-input"
                      label="Dinas Asal"
                      autoComplete="current-asal"
                    />
                    <TextField
                      id="outlined-nohp-input"
                      label="Nomor HP"
                      autoComplete="current-nohp"
                    />
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
export default daftar;

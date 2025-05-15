"use client";
import { Grid, Box } from "@mui/material";
import PageContainer from "@/app/dashboard/components/container/PageContainer";
// components
import JumlahPengunjung from "@/app/dashboard/components/analisis/JumlahPengunjung";
import WaktuPelayanan from "@/app/dashboard/components/analisis/WaktuPelayanan";
import KepuasanPelangganCard from "@/app/dashboard/components/analisis/KepuasanPelangganCard";
import KepuasanPelanggan from "../components/analisis/KepuasanPelanggan";

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          {/* <Grid item xs={12} lg={4}>
            <RecentTransactions />
          </Grid> */}
          {/* <Grid item xs={12} lg={12}>
            <TicketFilter />
          </Grid>
          <Grid item xs={12} lg={12}>
            <TicketListing />
          </Grid> */}
          {/* <Grid item xs={12} lg={12}>
            <ProductPerformance />
          </Grid> */}
          {/* <Grid item xs={12}>
            <Blog />
          </Grid> */}
          <Grid item xs={12} lg={6}>
            <JumlahPengunjung />
          </Grid>
          <Grid item xs={12} lg={6}>
            <KepuasanPelanggan />
          </Grid>
          {/* <Grid item xs={12} lg={6}>
            <WaktuPelayanan />
          </Grid>
          <Grid item xs={12} lg={6}>
            <KepuasanPelangganCard />
          </Grid> */}
          <Grid item xs={12} lg={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={6}>
                <WaktuPelayanan />
              </Grid>
              <Grid item xs={12} lg={6}>
                <KepuasanPelangganCard />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Dashboard;

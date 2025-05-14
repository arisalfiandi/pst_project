"use client";
import { Grid, Box } from "@mui/material";
// components
import NomorAntrian from "@/app/(DashboardLayout)/components/dashboard/NomorAntrian";
import WaktuEstimasiPengunjung from "@/app/(DashboardLayout)/components/dashboard/WaktuEstimasiPengunjung";
import AsalAntrian from "@/app/(DashboardLayout)/components/dashboard/AsalAntrian";
import TicketPengunjung from "@/app/(DashboardLayout)/components/dashboard/TicketPengunjung";

const Dashboard = () => {
  return (
    <Box>
      <Grid container spacing={3} mt={0.1}>
        <Grid item xs={12} lg={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={12}>
              <NomorAntrian />
            </Grid>
            <Grid item xs={12} lg={12}>
              <AsalAntrian />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={8}>
          <TicketPengunjung />
        </Grid>
        <Grid item xs={12} lg={12}>
          <WaktuEstimasiPengunjung />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;

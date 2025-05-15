"use client";
import { Grid, Box } from "@mui/material";
import PageContainer from "@/app/dashboard/components/container/PageContainer";
// components
import KritikSaran from "@/app/dashboard/components/kritikdansaran/KritikSaran";
import YearlyBreakup from "@/app/dashboard/components/fixed/YearlyBreakup";
import MonthlyEarnings from "@/app/dashboard/components/fixed/MonthlyEarnings";

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12}>
            <KritikSaran />
          </Grid>
          <Grid item xs={12} lg={6} sx={{ visibility: "hidden" }}>
            <YearlyBreakup />
          </Grid>
          <Grid item xs={12} lg={6} sx={{ visibility: "hidden" }}>
            <MonthlyEarnings />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Dashboard;

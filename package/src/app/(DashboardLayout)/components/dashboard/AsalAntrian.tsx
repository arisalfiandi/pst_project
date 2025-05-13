import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from "@mui/material/styles";
import { Grid, Stack, Typography, Avatar } from "@mui/material";
import { IconArrowUpLeft } from "@tabler/icons-react";

import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";

const AsalAntrian = () => {
  // chart color
  const theme = useTheme();
  const secondary = theme.palette.secondary.main;
  const secondarylight = "#f5fcff";
  const errorlight = "#fdede8";

  return (
    <DashboardCard
    // title="Dinas"
    >
      <Grid container spacing={1}>
        {/* column */}
        <Grid item xs={12} sm={12} mb={2}>
          <Typography
            variant="h1"
            fontSize={30}
            fontWeight="1600"
            textAlign="center">
            Dinas Pertanian
          </Typography>
        </Grid>
      </Grid>
    </DashboardCard>
  );
};

export default AsalAntrian;

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from "@mui/material/styles";
import { Grid, Stack, Typography, Avatar, Box } from "@mui/material";
import Image from "next/image";

import DashboardCard from "@/app/dashboard/components/shared/DashboardCard";

const AsalAntrian = () => {
  // chart color
  const theme = useTheme();
  const secondary = theme.palette.secondary.main;
  const secondarylight = "#f5fcff";
  const errorlight = "#fdede8";

  return (
    <DashboardCard
      // title="Dinas"
      bgcol="#E8F7FF"
    >
      <Grid container spacing={1}>
        {/* column */}
        <Grid item xs={12} sm={12}>
          <Typography
            variant="h1"
            fontSize={30}
            fontWeight="1600"
            textAlign="center"
          >
            Bantu kami menjadi lebih baik
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} mb={2}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Image
              alt="Remy Sharp"
              src="/images/qr.png"
              width={160}
              height={160}
            />
          </Box>
          <Typography
            variant="h1"
            fontSize={30}
            fontWeight="1600"
            textAlign="center"
          >
            s.bps.go.id/SKD8204
          </Typography>
        </Grid>
      </Grid>
    </DashboardCard>
  );
};

export default AsalAntrian;

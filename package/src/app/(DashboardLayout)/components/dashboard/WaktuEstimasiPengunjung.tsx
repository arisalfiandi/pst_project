import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from "@mui/material/styles";
import { Grid, Stack, Typography, Avatar } from "@mui/material";

import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";

const WaktuEstimasiPengunjung = () => {
  // chart color
  const theme = useTheme();
  const secondary = theme.palette.secondary.main;
  const secondarylight = "#f5fcff";
  const errorlight = "#fdede8";

  // chart
  const optionscolumnchart: any = {
    chart: {
      type: "area",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: "#adb0bb",
      toolbar: {
        show: false,
      },
      height: 60,
      sparkline: {
        enabled: true,
      },
      group: "sparklines",
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      colors: [secondarylight],
      type: "solid",
      opacity: 0.05,
    },
    markers: {
      size: 0,
    },
    tooltip: {
      theme: theme.palette.mode === "dark" ? "dark" : "light",
    },
  };
  const seriescolumnchart: any = [
    {
      name: "",
      color: secondary,
      data: [25, 66, 20, 40, 12, 58, 20],
    },
  ];

  // chart
  // const optionscolumnchart: any = {
  //   chart: {
  //     type: "donut",
  //     fontFamily: "'Plus Jakarta Sans', sans-serif;",
  //     foreColor: "#adb0bb",
  //     toolbar: {
  //       show: false,
  //     },
  //     height: 155,
  //   },
  //   colors: [primary, primarylight, "#F9F9FD"],
  //   plotOptions: {
  //     pie: {
  //       startAngle: 0,
  //       endAngle: 360,
  //       donut: {
  //         size: "75%",
  //         background: "transparent",
  //       },
  //     },
  //   },
  //   tooltip: {
  //     theme: theme.palette.mode === "dark" ? "dark" : "light",
  //     fillSeriesColor: false,
  //   },
  //   stroke: {
  //     show: false,
  //   },
  //   dataLabels: {
  //     enabled: false,
  //   },
  //   legend: {
  //     show: false,
  //   },
  //   responsive: [
  //     {
  //       breakpoint: 991,
  //       options: {
  //         chart: {
  //           width: 120,
  //         },
  //       },
  //     },
  //   ],
  // };
  // const seriescolumnchart: any = [38, 40, 25];

  return (
    <DashboardCard
    // bgcol="#E6FFFA"
    >
      <Grid container spacing={1}>
        {/* column */}
        <Grid item xs={12} sm={12} mb={2}>
          <Typography
            variant="h5"
            fontSize={30}
            fontWeight="1600"
            textAlign="center"
          >
            Estimasi Waktu Pelayanan
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} mt={2} mb={4}>
          <Typography
            variant="h1"
            fontSize={30}
            fontWeight="1600"
            textAlign="center"
          >
            26 Menit
          </Typography>
        </Grid>
      </Grid>
    </DashboardCard>
  );
};

export default WaktuEstimasiPengunjung;

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from "@mui/material/styles";
import { Grid, Stack, Typography, Avatar } from "@mui/material";
import { IconArrowUpLeft } from "@tabler/icons-react";

import DashboardCard from "@/app/dashboard/components/shared/DashboardCard";

const YearlyBreakup = () => {
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
      title="Rata-Rata Waktu Pelayanan Hari Ini"
      // footer={
      //   <Chart
      //     options={optionscolumnchart}
      //     series={seriescolumnchart}
      //     type="area"
      //     height={60}
      //     width={"100%"}
      //   />
      // }
    >
      <Grid container spacing={3}>
        {/* column */}
        <Grid item xs={12} sm={12}>
          <Typography variant="h3" fontWeight="700">
            26 menit
          </Typography>
          <Stack direction="row" spacing={1} mt={1} alignItems="center">
            {/* <Avatar sx={{ bgcolor: successlight, width: 27, height: 27 }}>
              <IconArrowUpLeft width={20} color="#39B69A" />
            </Avatar> */}
            <Typography variant="subtitle2" fontWeight="600" color="#39B69A">
              +9%
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              Lebih Cepat dari Kemarin
            </Typography>
          </Stack>
          {/* <Stack spacing={3} mt={5} direction="row">
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar
                sx={{
                  width: 9,
                  height: 9,
                  bgcolor: primary,
                  svg: { display: "none" },
                }}></Avatar>
              <Typography variant="subtitle2" color="textSecondary">
                2022
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar
                sx={{
                  width: 9,
                  height: 9,
                  bgcolor: primarylight,
                  svg: { display: "none" },
                }}></Avatar>
              <Typography variant="subtitle2" color="textSecondary">
                2023
              </Typography>
            </Stack>
          </Stack> */}
        </Grid>
        {/* column */}
        {/* <Grid item xs={5} sm={5}>
          <Chart
            options={optionscolumnchart}
            series={seriescolumnchart}
            type="donut"
            height={150} width={"100%"}
          />
        </Grid> */}
      </Grid>
    </DashboardCard>
  );
};

export default YearlyBreakup;

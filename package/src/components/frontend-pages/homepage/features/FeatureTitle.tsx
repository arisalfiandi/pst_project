import { Box, Grid, Typography } from "@mui/material";

const FeatureTitle = () => {
  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid item xs={12} lg={6} textAlign="center">
        <Typography
          variant="h4"
          mb={3}
          textAlign="center"
          lineHeight="1.2"
          sx={{
            fontSize: {
              lg: "40px",
              xs: "35px",
            },
          }}
        >
          Cari Data di Kabupaten Halmahera Selatan
        </Typography>
      </Grid>
    </Grid>
  );
};

export default FeatureTitle;

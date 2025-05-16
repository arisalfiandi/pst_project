import { Box, Typography, Grid, Container, Link } from "@mui/material";

import { styled } from "@mui/material/styles";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useTheme } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useState } from "react";

const FAQ = () => {
  const theme = useTheme();

  const [expanded, setExpanded] = useState(true);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [expanded4, setExpanded4] = useState(false);
  const [expanded5, setExpanded5] = useState(false);
  const [expanded6, setExpanded6] = useState(false);

  const StyledAccordian = styled(Accordion)(() => ({
    borderRadius: "8px",
    marginBottom: "16px !important",
    boxShadow:
      theme.palette.mode == "light"
        ? "0px 3px 0px rgba(235, 241, 246, 0.25)"
        : "unset",
    border: `1px solid ${theme.palette.divider}`,
    "&:before": {
      display: "none",
    },
    "&.Mui-expanded": {
      margin: "0",
    },
    "& .MuiAccordionSummary-root": {
      padding: "8px 24px",
      minHeight: "60px",
      fontSize: "18px",
      fontWeight: 500,
    },
    "& .MuiAccordionDetails-root": {
      padding: "0 24px 24px",
    },
  }));

  const handleChange = () => {
    setExpanded(!expanded);
  };

  const handleChange2 = () => {
    setExpanded2(!expanded2);
  };

  const handleChange3 = () => {
    setExpanded3(!expanded3);
  };

  const handleChange4 = () => {
    setExpanded4(!expanded4);
  };

  const handleChange5 = () => {
    setExpanded5(!expanded5);
  };

  const handleChange6 = () => {
    setExpanded6(!expanded6);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        pb: {
          xs: "30px",
          lg: "60px",
        },
      }}
    >
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} lg={8}>
          <Typography
            variant="h4"
            textAlign="center"
            lineHeight="1.2"
            sx={{
              fontSize: {
                lg: "40px",
                xs: "35px",
              },
            }}
            fontWeight="700"
          >
            Pertanyaan-Pertanyaan
          </Typography>
          <Box mt={7}>
            <StyledAccordian expanded={expanded} onChange={handleChange}>
              <AccordionSummary
                expandIcon={
                  expanded ? (
                    <IconMinus size="21" stroke="1.5" />
                  ) : (
                    <IconPlus size="21" stroke="1.5" />
                  )
                }
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Bagaimana cara mendapatkan layanan di PST BPS Halmahera Selatan?
              </AccordionSummary>
              <AccordionDetails>
                Pergi ke BPS Halmahera Selatan, scan barcode antrian, dan tunggu
                hingga dipanggil oleh petugas PST
              </AccordionDetails>
            </StyledAccordian>
            <StyledAccordian expanded={expanded2} onChange={handleChange2}>
              <AccordionSummary
                expandIcon={
                  expanded2 ? (
                    <IconMinus size="21" stroke="1.5" />
                  ) : (
                    <IconPlus size="21" stroke="1.5" />
                  )
                }
                aria-controls="panel2-content"
                id="panel2-header"
              >
                Dimana alamat BPS Halmahera Selatan?
              </AccordionSummary>
              <AccordionDetails>
                Jl. Karet Putih Labuha 97791 atau{" "}
                <Link
                  href="https://maps.app.goo.gl/GLe7Nr61YoicrpJH6"
                  underline="none"
                  target="_blank"
                >
                  klik disini
                </Link>
              </AccordionDetails>
            </StyledAccordian>
            <StyledAccordian expanded={expanded4} onChange={handleChange4}>
              <AccordionSummary
                expandIcon={
                  expanded4 ? (
                    <IconMinus size="21" stroke="1.5" />
                  ) : (
                    <IconPlus size="21" stroke="1.5" />
                  )
                }
                aria-controls="panel2-content"
                id="panel2-header"
              >
                Apakah layanan PST dipungut biaya?
              </AccordionSummary>
              <AccordionDetails>
                Tidak, layanan PST tidak dipungut biaya sama sekali.
              </AccordionDetails>
            </StyledAccordian>
            <StyledAccordian expanded={expanded5} onChange={handleChange5}>
              <AccordionSummary
                expandIcon={
                  expanded5 ? (
                    <IconMinus size="21" stroke="1.5" />
                  ) : (
                    <IconPlus size="21" stroke="1.5" />
                  )
                }
                aria-controls="panel2-content"
                id="panel2-header"
              >
                Apakah saya harus memiliki akun terlebih dahulu untuk
                mendapatkan layanan PST?
              </AccordionSummary>
              <AccordionDetails>
                Tidak, langsung klik tombol ambil tiket saja atau{" "}
                <Link href="/daftar" underline="none">
                  klik disini
                </Link>
              </AccordionDetails>
            </StyledAccordian>
            <StyledAccordian expanded={expanded3} onChange={handleChange3}>
              <AccordionSummary
                expandIcon={
                  expanded3 ? (
                    <IconMinus size="21" stroke="1.5" />
                  ) : (
                    <IconPlus size="21" stroke="1.5" />
                  )
                }
                aria-controls="panel3-content"
                id="panel3-header"
              >
                Kapan saya bisa mengunjungi PST BPS Halmahera Selatan?
              </AccordionSummary>
              <AccordionDetails>
                Jam operasional untuk hari senin-kamis: 07.30 - 12.00
                dilanjutkan 13.00-16.00. Hari jumat: 07.30-11.30 dilanjutkan
                13.30-16.30 {"(selain hari libur nasional)."}
              </AccordionDetails>
            </StyledAccordian>
            {/* <StyledAccordian expanded={expanded6} onChange={handleChange6}>
              <AccordionSummary
                expandIcon={
                  expanded6 ? (
                    <IconMinus size="21" stroke="1.5" />
                  ) : (
                    <IconPlus size="21" stroke="1.5" />
                  )
                }
                aria-controls="panel2-content"
                id="panel2-header"
              >
                How can I get support after purchase?
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </StyledAccordian> */}
          </Box>
        </Grid>
      </Grid>
      {/* <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} lg={5}>
          <Box
            mt={5}
            borderRadius="8px"
            display="inline-flex"
            justifyContent="center"
            gap="4px"
            alignItems="center"
            fontWeight={500}
            sx={{
              border: `1px dashed ${theme.palette.divider}`,
              padding: '7px 10px',
              cursor: 'pointer',
              '&:hover': {
                borderColor: 'primary.main',
              },
            }}
          >
            <Typography>Still have a question?</Typography>
            <Link
              href="https://discord.com/invite/XujgB8ww4n"
              color="inherit"
              underline="always"
              sx={{
                '&:hover': {
                  color: 'primary.main',
                },
              }}
            >
              Ask on discord{' '}
            </Link>
            <Typography>or</Typography>
            <Link
              href="https://adminmart.com/support/"
              color="inherit"
              underline="always"
              sx={{
                '&:hover': {
                  color: 'primary.main',
                },
              }}
            >
              submit a ticket
            </Link>
            .
          </Box>
        </Grid>
      </Grid> */}
    </Container>
  );
};
export default FAQ;

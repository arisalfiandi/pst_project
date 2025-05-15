import { Box, Grid, Typography, styled } from "@mui/material";
import { useDispatch, useSelector } from "@/store/Store";
import { TicketType } from "@/types/apps/ticket";
import { setVisibilityFilter } from "@/store/apps/tickets/TicketSlice";
import React, { useEffect } from "react";
import {
  fetchTickets,
  DeleteTicket,
  SearchTicket,
} from "@/store/apps/tickets/TicketSlice";

const BoxStyled = styled(Box)(() => ({
  padding: "30px",
  transition: "0.1s ease-in",
  cursor: "pointer",
  color: "inherit",
  "&:hover": {
    transform: "scale(1.03)",
  },
}));

const TicketFilter = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchTickets());
  // }, [dispatch]);
  const counter: TicketType[] = useSelector(
    (state) => state.ticketReducer.tickets
  );
  const pendingC = counter.filter((t) => t.status === "Pending").length;
  const openC = counter.filter((t) => t.status === "Open").length;
  const closeC = counter.filter((t) => t.status === "Closed").length;

  return (
    <Grid container spacing={3} textAlign="center">
      <Grid item lg={4} sm={6} xs={12}>
        <BoxStyled
          onClick={() => dispatch(setVisibilityFilter("total_tickets"))}
          sx={{ backgroundColor: "primary.light", color: "primary.main" }}>
          <Typography variant="h3">{counter.length}</Typography>
          <Typography variant="h6">Total Pegunjung Hari Ini</Typography>
        </BoxStyled>
      </Grid>
      <Grid item lg={4} sm={6} xs={12}>
        <BoxStyled
          onClick={() => dispatch(setVisibilityFilter("Pending"))}
          sx={{ backgroundColor: "warning.light", color: "warning.main" }}>
          <Typography variant="h3">{pendingC}</Typography>
          <Typography variant="h6">Pengunjung Menunggu</Typography>
        </BoxStyled>
      </Grid>
      <Grid item lg={4} sm={6} xs={12}>
        <BoxStyled
          onClick={() => dispatch(setVisibilityFilter("Open"))}
          sx={{ backgroundColor: "success.light", color: "success.main" }}>
          <Typography variant="h3">{openC}</Typography>
          <Typography variant="h6">Selesai</Typography>
        </BoxStyled>
      </Grid>
      {/* <Grid item lg={3} sm={6} xs={12}>
        <BoxStyled
          onClick={() => dispatch(setVisibilityFilter("Closed"))}
          sx={{ backgroundColor: "error.light", color: "error.main" }}>
          <Typography variant="h3">{closeC}</Typography>
          <Typography variant="h6">Closed Tickets</Typography>
        </BoxStyled>
      </Grid> */}
    </Grid>
  );
};

export default TicketFilter;

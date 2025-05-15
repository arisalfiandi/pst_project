// @ts-ignore
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "@/store/Store";
import { format } from "date-fns";
import {
  Box,
  Typography,
  Chip,
  useTheme,
  ThemeProvider,
  Link,
  Button,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { fetchTickets, DeleteTicket } from "@/store/apps/tickets/TicketSlice";
import { TicketType } from "@/types/apps/ticket";
import { AppState } from "@/store/Store";
import DashboardCard from "@/app/dashboard/components/shared/DashboardCard";

const TicketPengunjung = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const customizer = useSelector((state: AppState) => state.customizer);
  const [gridKey, setGridKey] = useState<number>(0);

  useEffect(() => {
    setGridKey((prev: number) => prev + 1);
  }, [customizer.isCollapse]);

  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);

  const getVisibleTickets = (
    tickets: TicketType[],
    filter: string,
    ticketSearch: string
  ) => {
    switch (filter) {
      case "total_tickets":
        return tickets.filter(
          (c) => !c.deleted && c.nama.toLocaleLowerCase().includes(ticketSearch)
        );

      case "Pending":
        return tickets.filter(
          (c) =>
            !c.deleted &&
            c.status === "Pending" &&
            c.nama.toLocaleLowerCase().includes(ticketSearch)
        );

      case "Closed":
        return tickets.filter(
          (c) =>
            !c.deleted &&
            c.status === "Closed" &&
            c.nama.toLocaleLowerCase().includes(ticketSearch)
        );

      case "Open":
        return tickets.filter(
          (c) =>
            !c.deleted &&
            c.status === "Open" &&
            c.nama.toLocaleLowerCase().includes(ticketSearch)
        );

      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  };

  const tickets = useSelector((state) =>
    getVisibleTickets(
      state.ticketReducer.tickets,
      state.ticketReducer.currentFilter,
      state.ticketReducer.ticketSearch
    )
  );
  // const ticketBadge = (ticket: TicketType) => {
  //   return ticket.status === "Open"
  //     ? theme.palette.success.light
  //     : ticket.status === "Closed"
  //     ? theme.palette.error.light
  //     : ticket.status === "Pending"
  //     ? theme.palette.warning.light
  //     : ticket.status === "Moderate"
  //     ? theme.palette.primary.light
  //     : "primary";
  // };

  const statusObj = {
    0: { color: "warning", status: "Menunggu" },
    1: { color: "success", status: "Selesai" },
  };

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "No",
      flex: 0.8,
      renderHeader: () => (
        // session.status === 'authenticated' && (session.data.uid === 1099999 || session.data.role == 'admin') ? (
        //   <>
        <Typography
          sx={{
            fontWeight: 900,
            fontSize: "0.875rem !important",
            textAlign: "center",
          }}
        >
          No
        </Typography>
      ),
      renderCell: (params) => (
        <Box display="flex" alignItems="center" height="100%">
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: "0.875rem !important",
              textAlign: "left",
            }}
          >
            {params.row.id}
          </Typography>
        </Box>
      ),
    },
    {
      field: "nama",
      headerName: "Nama",
      flex: 2,
      renderHeader: () => (
        // session.status === 'authenticated' && (session.data.uid === 1099999 || session.data.role == 'admin') ? (
        //   <>
        <Typography
          sx={{
            fontWeight: 900,
            fontSize: "0.875rem !important",
            textAlign: "center",
          }}
        >
          Nama
        </Typography>
      ),
      renderCell: (params) => (
        <Box display="flex" alignItems="center" height="100%">
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: "0.875rem !important",
              textAlign: "left",
            }}
          >
            {params.row.nama}
          </Typography>
        </Box>
      ),
    },
    {
      field: "asal",
      headerName: "Asal",
      flex: 2,
      renderHeader: () => (
        // session.status === 'authenticated' && (session.data.uid === 1099999 || session.data.role == 'admin') ? (
        //   <>
        <Typography
          sx={{
            fontWeight: 900,
            fontSize: "0.875rem !important",
            textAlign: "center",
          }}
        >
          Asal
        </Typography>
      ),
      renderCell: (params) => (
        <Box display="flex" alignItems="center" height="100%">
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: "0.875rem !important",
              textAlign: "left",
            }}
          >
            {params.row.asal}
          </Typography>
        </Box>
      ),
    },
  ];

  const rows = tickets.map((ticket) => {
    return {
      id: ticket.Id,
      nama: ticket.nama,
      asal: ticket.asal,
    };
  });

  return (
    <DashboardCard title="Daftar Antrian Hari Ini" titlesize={30}>
      <Box mt={4}>
        <DataGrid
          // sx={{
          //   bgcolor: "#E6FFFA",
          //   "& .MuiDataGrid-columnHeaders": {
          //     backgroundColor: "#E6FFFA !important", // <- tambahkan !important jika perlu
          //     color: "black",
          //   },
          //   "& .MuiDataGrid-columnHeaderTitle": {
          //     fontWeight: "bold",
          //   },
          // }}
          key={gridKey}
          rowHeight={60}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[5]}
          // slots={{
          //   toolbar: GridToolbar,
          // }}
          // slotProps={{
          //   toolbar: { showQuickFilter: true },
          // }}
          // checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </DashboardCard>
  );
};

export default TicketPengunjung;

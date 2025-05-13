// @ts-ignore
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "@/store/Store";
import { format } from "date-fns";
import { Box, Typography, Chip, useTheme, Link, Button } from "@mui/material";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { fetchTickets, DeleteTicket } from "@/store/apps/tickets/TicketSlice";
import { TicketType } from "@/types/apps/ticket";
import { AppState } from "@/store/Store";
import DashboardCard from "@/app/(DashboardLayout)//components/shared/DashboardCard";

const KritikSaran = () => {
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
      flex: 0.5,
      renderHeader: () => (
        // session.status === 'authenticated' && (session.data.uid === 1099999 || session.data.role == 'admin') ? (
        //   <>
        <Typography
          sx={{
            fontWeight: 900,
            fontSize: "0.875rem !important",
            textAlign: "center",
          }}>
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
            }}>
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
          }}>
          Nama
        </Typography>
      ),
      renderCell: (params) => (
        <Box display="flex" alignItems="center" height="100%">
          <Typography
            sx={{
              fontWeight: 200,
              fontSize: "0.875rem !important",
              textAlign: "left",
            }}>
            {params.row.nama}
          </Typography>
        </Box>
      ),
    },
    {
      field: "asal",
      headerName: "Asal",
      flex: 1.5,
      renderHeader: () => (
        // session.status === 'authenticated' && (session.data.uid === 1099999 || session.data.role == 'admin') ? (
        //   <>
        <Typography
          sx={{
            fontWeight: 900,
            fontSize: "0.875rem !important",
            textAlign: "center",
          }}>
          Asal
        </Typography>
      ),
      renderCell: (params) => (
        <Box display="flex" alignItems="center" height="100%">
          <Typography
            sx={{
              fontWeight: 200,
              fontSize: "0.875rem !important",
              textAlign: "left",
            }}>
            {params.row.asal}
          </Typography>
        </Box>
      ),
    },
    {
      field: "komentar",
      headerName: "Komentar",
      flex: 2,
      renderHeader: () => (
        // session.status === 'authenticated' && (session.data.uid === 1099999 || session.data.role == 'admin') ? (
        //   <>
        <Typography
          sx={{
            fontWeight: 900,
            fontSize: "0.875rem !important",
            textAlign: "center",
          }}>
          Komentar
        </Typography>
      ),
      renderCell: (params) => (
        <Box display="flex" alignItems="center" height="100%">
          <Typography
            sx={{
              fontWeight: 200,
              fontSize: "0.875rem !important",
              textAlign: "left",
            }}>
            {params.row.status}
          </Typography>
        </Box>
      ),
    },
    {
      field: "nilai",
      headerName: "Nilai",
      renderHeader: () => (
        // session.status === 'authenticated' && (session.data.uid === 1099999 || session.data.role == 'admin') ? (
        //   <>
        <Typography
          sx={{
            fontWeight: 900,
            fontSize: "0.875rem !important",
            textAlign: "center",
          }}>
          Nilai
        </Typography>
      ),
      // type: "date",
      flex: 1,
      // valueGetter: (params) => new Date(params.value),
      renderCell: (params) => (
        <Box display="flex" alignItems="center" height="100%">
          <Typography
            sx={{
              fontWeight: 200,
              fontSize: "0.875rem !important",
              textAlign: "left",
            }}>
            {params.row.waktu}
          </Typography>
        </Box>
      ),
    },
    {
      field: "aksi",
      renderHeader: () => (
        // session.status === 'authenticated' && (session.data.uid === 1099999 || session.data.role == 'admin') ? (
        //   <>
        <Typography
          sx={{
            fontWeight: 900,
            fontSize: "0.875rem !important",
            textAlign: "right",
          }}>
          Aksi
        </Typography>
      ),
      //   </>
      // ) : (
      //   <></>
      // ),
      flex: 1,
      renderCell: (params) => (
        <Button variant="contained" color="warning">
          <Typography sx={{ textAlign: "right" }}>Detail</Typography>
        </Button>
      ),
      // session.status === 'authenticated' && (session.data.uid === 1099999 || session.data.role == 'admin') ? (
      //   <>
      //     <Button
      //       onClick={e => {
      //         e.preventDefault()
      //         router.push(`/mitra-edit/${params.row.id}`)
      //       }}
      //       type='submit'
      //       sx={{ mr: 1 }}
      //       color='info'
      //       variant='text'
      //     >
      //       <PencilOutline />
      //     </Button>

      //     <Button
      //       onClick={() => {
      //         Swal.fire({
      //           title: 'Hapus Mitra?',
      //           text: '',
      //           icon: 'warning',
      //           showCancelButton: true,
      //           confirmButtonColor: '#3085d6',
      //           cancelButtonColor: '#d33',
      //           confirmButtonText: 'Ya, Hapus Mitra'
      //         }).then(result => {
      //           if (result.isConfirmed) {
      //             handleDelete(params.row.id)
      //           }
      //         })
      //       }}
      //       type='submit'
      //       sx={{ mr: 1 }}
      //       color='error'
      //       variant='text'
      //     >
      //       <DeleteOutline />
      //     </Button>
      //   </>
      // ) : (
      //   <></>
      // )
    },
  ];

  const rows = tickets.map((ticket) => {
    return {
      id: ticket.Id,
      nama: ticket.nama,
      asal: ticket.asal,
      komentar: ticket.status,
      nilai: ticket.waktu,
    };
  });

  return (
    <DashboardCard title="Kritik dan Saran Pengunjung">
      <Box mt={4}>
        <DataGrid
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
          pageSizeOptions={[5, 10, 50, 100]}
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

export default KritikSaran;

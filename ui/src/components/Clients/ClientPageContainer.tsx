import React from 'react'

import { useContext } from "react";

import { Paper, Typography } from "@mui/material";

import { ClientTable, ClientActionBar } from "@components/Clients";
import { StateContext } from "@store/DataProvider";

export const ClientPageContainer = () => {
  const { clients } = useContext(StateContext).state;

  return (
    <>
      <Typography variant="h4" sx={{ textAlign: "start" }}>
          Clients
      </Typography>
      <ClientActionBar />
      <Paper sx={{ margin: "auto", marginTop: 3 }}>
        <ClientTable clients={clients} />
      </Paper>
    </>
  )
} 
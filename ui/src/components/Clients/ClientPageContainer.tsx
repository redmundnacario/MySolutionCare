import React from 'react'

import { useContext } from "react";

import { Paper, Typography } from "@mui/material";

import { ClientTable, ClientActionBar } from "@components/Clients";
import { StateContext } from "@store/DataProvider";

import WithCreateClientActionsProvider from './actions/WithCreateClientActionsProvider';
import WithSearchClientActionsProvider from './actions/WithSearchClientActionsProvider';

export const ClientPageContainer = () => {
  const { clients } = useContext(StateContext).state;

  return (
    <WithCreateClientActionsProvider>
      <WithSearchClientActionsProvider>
        <>
          <Typography variant="h4" sx={{ textAlign: "start" }}>
              Clients
          </Typography>
          <ClientActionBar />
          <Paper sx={{ margin: "auto", marginTop: 3 }}>
            <ClientTable clients={clients} />
          </Paper>
        </>
      </WithSearchClientActionsProvider>
    </WithCreateClientActionsProvider>
  )
} 
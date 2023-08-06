import { Paper, Typography } from "@mui/material";

import { ClientTable, ClientActionBar } from "@components/page/clients";
import { useSearchClientActionsContext } from './actions/WithSearchClientActionsProvider';

export const ClientPageContainer = () => {
  const { filteredClients} = useSearchClientActionsContext()

  return (
    <>
      <Typography variant="h4" sx={{ textAlign: "start" }}>
          Clients
      </Typography>
      <ClientActionBar />
      <Paper sx={{ margin: "auto", marginTop: 3 }}>
        <ClientTable clients={filteredClients} />
      </Paper>
    </>
  )
} 
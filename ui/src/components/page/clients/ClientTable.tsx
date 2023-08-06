import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { IClient } from "@models/application"
import { ClientRow } from "./ClientRow";

export const ClientTable = ({ clients }: { clients: IClient[] }) => {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: "100%" }}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <div className="font-bold">
                Name
              </div>
            </TableCell>
            <TableCell>
              <div className="font-bold">
                Phone number
              </div>
            </TableCell>
            <TableCell>
              <div className="font-bold">
                Email
              </div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map((client) => (
            <ClientRow key={client.id} client={client} />
          ))}
          {!clients ||
            (!clients.length && (
              <TableRow sx={{ padding: 3 }}>
                <TableCell component="th" scope="row">
                  No clients
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

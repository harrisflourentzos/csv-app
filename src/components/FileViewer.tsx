import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { User } from "../model/User";
import classes from "./FileViewer.module.css";
import { useEffect, useState } from "react";
import { getCsvUsers } from "../api/DotNetApi";

type Props = { csvId?: string };

function FileViewer({ csvId }: Props) {
  const [users, setUsers] = useState<User[]>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    async function dispatch() {
      if (csvId) {
        try {
          const response = await getCsvUsers(csvId);
          console.log(response.users);
          setUsers(response.users);
        } catch (e) {
          setError((e as Error).message);
        }
      }
    }
    dispatch();
  }, [csvId]);

  return (
    <div className={classes.container}>
      {error && <p>{error}</p>}
      {users && users?.length > 0 && !error && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell align="center">Last Name</TableCell>
                <TableCell align="center">Job Title</TableCell>
                <TableCell align="center">Email Address</TableCell>
                <TableCell align="center">Department</TableCell>
                <TableCell align="center">Contact Type</TableCell>
                <TableCell align="center">Company Name</TableCell>
                <TableCell align="center">Business Phone</TableCell>
                <TableCell align="center">Address Street1</TableCell>
                <TableCell align="center">Address Street2</TableCell>
                <TableCell align="center">City</TableCell>
                <TableCell align="center">Postalcode</TableCell>
                <TableCell align="center">Country</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users?.map((user: User, index: number) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {user.firstName}
                  </TableCell>
                  <TableCell align="center">{user.lastName}</TableCell>
                  <TableCell align="center">{user.jobTitle}</TableCell>
                  <TableCell align="center">{user.emailaddress1}</TableCell>
                  <TableCell align="center">{user.department}</TableCell>
                  <TableCell align="center">{user.contactType}</TableCell>
                  <TableCell align="center">{user.companyName}</TableCell>
                  <TableCell align="center">{user.businessPhone}</TableCell>
                  <TableCell align="center">{user.addressStreet1}</TableCell>
                  <TableCell align="center">{user.addressStreet2}</TableCell>
                  <TableCell align="center">{user.addressCity}</TableCell>
                  <TableCell align="center">{user.addressPostalcode}</TableCell>
                  <TableCell align="center">{user.addressCountry}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}
export default FileViewer;

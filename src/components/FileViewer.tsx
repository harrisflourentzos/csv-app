import React, { useEffect } from "react";
import useHttp from "../hooks/use-http";
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

type Props = { csvId?: string };

function FileViewer({ csvId }: Props) {
  // const { sendRequest, status, data, error } = useHttp(getCsvUsers, true);

  // useEffect(() => {
  //   sendRequest(csvId);
  // }, [csvId, sendRequest]);

  const data = [
    new User(
      "firstName",
      "lastName",
      "jobTitle",
      "emailaddress1",
      "department",
      "contactType",
      "companyName",
      "businessPhone",
      "addressStreet1",
      "addressStreet2",
      "addressCity",
      "addressPostalcode",
      "addressCountry"
    ),
    new User(
      "firstName2",
      "lastName2",
      "jobTitle2",
      "emailaddress12",
      "department2",
      "contactType2",
      "companyName2",
      "businessPhone2",
      "addressStreet12",
      "addressStreet22",
      "addressCity2",
      "addressPostalcode2",
      "addressCountry2"
    ),
  ];

  return (
    <div className={classes.container}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Job Title</TableCell>
              <TableCell align="right">Email Address</TableCell>
              <TableCell align="right">Department</TableCell>
              <TableCell align="right">Contact Type</TableCell>
              <TableCell align="right">Company Name</TableCell>
              <TableCell align="right">Business Phone</TableCell>
              <TableCell align="right">Address Street1</TableCell>
              <TableCell align="right">Address Street2</TableCell>
              <TableCell align="right">City</TableCell>
              <TableCell align="right">Postalcode</TableCell>
              <TableCell align="right">Country</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row: User) => (
              <TableRow
                key={row.firstName}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.firstName}
                </TableCell>
                <TableCell align="right">{row.lastName}</TableCell>
                <TableCell align="right">{row.jobTitle}</TableCell>
                <TableCell align="right">{row.emailaddress1}</TableCell>
                <TableCell align="right">{row.department}</TableCell>
                <TableCell align="right">{row.contactType}</TableCell>
                <TableCell align="right">{row.companyName}</TableCell>
                <TableCell align="right">{row.businessPhone}</TableCell>
                <TableCell align="right">{row.addressStreet1}</TableCell>
                <TableCell align="right">{row.addressStreet2}</TableCell>
                <TableCell align="right">{row.addressCity}</TableCell>
                <TableCell align="right">{row.addressPostalcode}</TableCell>
                <TableCell align="right">{row.addressCountry}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default FileViewer;

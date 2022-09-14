import React from "react";
import users from "../Components/users";
import Sidebar from "../Components/Sidebar";
import Nav from "../Components/Nav";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import { Delete, Edit, RemoveRedEye } from "@mui/icons-material";
import "./ViewUser.css";

console.log(users);
function ViewUser() {
  return (
    <div>
      <Nav />
      <Sidebar />
      <div className="parentContainerUser">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold", fontSize: "1rem" }}>
                  FIRST NAME
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "1rem" }}>
                  LAST NAME
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "1rem" }}>
                  EMAIL
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "1rem" }}>
                  PHONE
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "1rem" }}>
                  BIRTHDATE
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "1rem" }}>
                  EDIT
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((data) => (
                <TableRow>
                  <TableCell>{data.firstName}</TableCell>
                  <TableCell>{data.lastName}</TableCell>
                  <TableCell>{data.eMail}</TableCell>
                  <TableCell>{data.phone}</TableCell>
                  <TableCell>{data.birthDate}</TableCell>
                  <TableCell>
                    <RemoveRedEye sx={{ color: "green" }} />
                    <Delete sx={{ color: "red" }} />
                    <Edit sx={{ color: "#235784" }} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default ViewUser;

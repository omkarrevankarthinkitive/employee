import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import Sidebar from "../Components/Sidebar";
import Nav from "../Components/Nav";
import "./AddUser.css";
import { grey } from "@mui/material/colors";
import users from "../Components/users";
function EditUser() {
  const [initial, setInitial] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    drivingLiscence: "",
    birthdate: "",
  });

  function handleChange(e) {}
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <Nav />
      <Sidebar />

      <div className="parentAddUser">
        <div className="parentAddUser1">
          <form className="formClassAdd" onSubmit={handleSubmit}>
            <div>
              <div className="inputMarginUsers">
                <h1 style={{ color: "grey " }}>ADD USER :</h1>
                <TextField
                  required
                  label="First Name"
                  value={initial.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="inputMarginUsers">
                <TextField
                  required
                  label="Last Name"
                  value={initial.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              {" "}
              <div className="inputMarginUsers">
                <TextField
                  required
                  label="Phone"
                  type="number"
                  value={initial.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="inputMarginUsers">
                <TextField
                  required
                  label="Driving liscence"
                  value={initial.drivingLiscence}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="inputMarginUsers">
              <TextField
                required
                label="birthdate"
                type="date"
                value={initial.birthdate}
                onChange={handleChange}
              />
            </div>
            <Button type="Submit" variant="contained" color="primary">
              ADD USER
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditUser;

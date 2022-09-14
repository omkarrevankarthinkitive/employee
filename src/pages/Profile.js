import React from "react";
import { Typography } from "@mui/material";
function Profile() {
  return (
    <div>
      <div>
        <div>
          <img src="https://cdn.worldvectorlogo.com/logos/lorem-lorem.svg" />
        </div>
        <div>
          <Typography variant="h3">first name</Typography>
          <Typography variant="h3">last name</Typography>
          <Typography variant="h3">phone number</Typography>
          <Typography variant="h3">email</Typography>
        </div>
      </div>
    </div>
  );
}

export default Profile;

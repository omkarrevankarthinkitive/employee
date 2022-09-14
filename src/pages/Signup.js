import { Input, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
function Signup() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    eMail: "",
    password: "",
    phone: "",
  });
  const [error, setError] = useState();
  const navigate = useNavigate();
  function handleChange({ currentTarget: input }) {
    setData({ ...data, [input.name]: input.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http:localhost:8000/api/users";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="container-login">
      <div>
        <img src="https://cdn.worldvectorlogo.com/logos/lorem-lorem.svg" />
      </div>

      <form className="contained" onSubmit={handleSubmit}>
        <div>
          <Input
            type="text"
            color="primary"
            placeholder="Fist Name"
            className="margin-1"
            name="firstName"
            value={data.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <Input
            color="primary"
            placeholder="Last Name"
            className="margin-1"
            name="lastName"
            value={data.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <Input
            color="primary"
            placeholder="E-mail"
            className="margin-1"
            name="eMail"
            value={data.eMail}
            onChange={handleChange}
          />
        </div>
        <div>
          <Input
            color="primary"
            placeholder="phone"
            className="margin-1"
            type="number"
            name="phone"
            value={data.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <Input
            color="primary"
            placeholder="Password"
            className="margin-1"
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
        </div>
        {error && <div>{error}</div>}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="margin-1"
        >
          <Link to="/prices">SIgnUP</Link>
        </Button>
        <p>
          already have an account? <Link to="/">Log in</Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;

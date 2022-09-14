// import { Input, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Login.css";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
function Login() {
  const [data, setData] = useState({
    eMail: "",
    password: "",
  });
  const [error, setError] = useState();

  function handleChange({ currentTarget: input }) {
    setData({ ...data, [input.name]: input.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http:localhost:8000/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
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
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={data.eMail}
            name="eMail"
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={data.password}
            name="password"
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          <Link to="/prices">LOG IN</Link>
        </Button>
      </Form>
      <p>
        don't have an account? <Link to="/signup">SignUp</Link>
      </p>
    </div>
  );
}

export default Login;

import React from "react";
import "./Crad.css";
import { Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { Link } from "react-router-dom";
function Card({ free, useFree, price, feature1, feature2, feature3 }) {
  return (
    <div className="card-container">
      <div className="two-container-card">
        <div className="Img-conatiner-card">
          <img src="https://cdn.worldvectorlogo.com/logos/lorem-lorem.svg" />
        </div>
        <div>
          <p>{free}</p>
          <h1>{price}</h1>
          <Button variant="contained" sx={{ color: "white" }}>
            <Link to="/home">{useFree}</Link>
          </Button>
          <div>
            <p>
              <CheckIcon /> {feature1}
            </p>
            <p>
              <CheckIcon /> {feature2}
            </p>
            <p>
              <CheckIcon /> {feature3}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

import React from "react";
import Card from "../Components/Card";
import "./Prices.css";
function Prices() {
  return (
    <div className="height-div">
      <div className="Prize-cards-container">
        <div className="wholeContainer">
          <Card
            free="30 DAYS FREE TRIAL"
            price="$99/month"
            useFree="START 30 DAYS FREE TRIAL"
            feature1="CREATE A NEW RECORD"
            feature2="UNIQUE IDENTIFIER"
            feature3="SEARCH RECORD FIRST NAME,LASTNAME & PHONE"
          />
        </div>
        <div className="wholeContainer">
          <Card
            free="30 DAYS FREE TRIAL"
            price="$125/month"
            useFree="START 30 DAYS FREE TRIAL"
            feature1="CREATE A NEW RECORD WITH EXTRA FEATURES"
            feature2="UNIQUE IDENTIFIER WITH SPEED UPTO 1GBPS"
            feature3="SEARCH RECORD FIRST NAME,LASTNAME & PHONE"
          />
        </div>
      </div>
    </div>
  );
}

export default Prices;

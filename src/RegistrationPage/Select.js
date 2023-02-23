import React from "react";
import "../RegistrationPage/Select.css";
import Grid from "../../node_modules/@mui/material/Grid";
import { useState, useEffect } from "react";

const Select = (props) => {
  useEffect(() => {
    props.slectted(finalText);
  });
  const initialValue = [
    "Adhar Id",
    "Student Id",
    "Passport",
    "Birth Certificate",
  ];
  const [finalText, setFinalText] = useState("");
  const [selectedButton, setSelectedButton] = useState("Adhar Id");
  const cardStyle = "Card ";

  return (
    <div>
      <h2 className="Heading">Select Identification type</h2>

      <Grid className="CenterGrid">
        {initialValue.map((movie, index) => (
          <label
            key={index}
            className={
              cardStyle + `${selectedButton == movie ? "selected" : ""}`
            }
          >
            <input
              onChange={(e) => {
                setSelectedButton(e.target.value);
              }}
              type="radio"
              name="buttons"
              value={movie}
              checked=""
            />
            {movie}
          </label>
        ))}
      </Grid>

      <h4 className="aadarhead">Enter Your {selectedButton}</h4>
      <div className="Center">
        <input
          value={finalText}
          onChange={(event) => setFinalText(event.target.value)}
          type="text"
          placeholder="123 4566"
          className="type"
        ></input>
      </div>
    </div>
  );
};

export default Select;

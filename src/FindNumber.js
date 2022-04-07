import { get } from 'lodash';
import React, { useState } from 'react';
import Button from "@mui/material/Button";
import "./App.css"

const FindNumber = () => {

    const [number, setNumber] = useState("");

    const find = () => {
    const array = [40, 70, 10, 55, 30, 100, 88, 15];
    array.sort(function(a, b){return b - a});
    setNumber(get(array, "[1]", ""));
    }

  return (
    <div className="selectDiv">
    <label>We have array: [40, 70, 10, 55, 30, 100, 88, 15] </label>
    <Button onClick={() => find()} variant="outlined">Find Second largest Number</Button>
    <h3> Second largest Number is: {number}</h3>
    </div>
  )
}

export default FindNumber
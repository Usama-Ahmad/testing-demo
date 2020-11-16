import React, { useState } from "react";

import CustomInput from "./input";
import Header from "./header";
import CustomButton from "./button";
import add from "../utils/helperFunctions";

const Calculator = () => {
  let [num1, setNum1] = useState("");
  let [num2, setNum2] = useState("");
  let [sum, setSum] = useState("");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Header />
      <CustomInput
        placeholder='num1'
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <CustomInput
        placeholder='num2'
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <CustomButton text='Add' onClick={(e) => setSum(add(num1, num2))} />
      <h1>{sum}</h1>
    </div>
  );
};

export default Calculator;

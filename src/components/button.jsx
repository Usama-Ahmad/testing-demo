import React from "react";

const CustomButton = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

export default CustomButton;

import React from "react";

const CustomInput = (props) => {
  return (
    <input
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default CustomInput;

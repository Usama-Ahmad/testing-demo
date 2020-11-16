import React from "react";
import { render, cleanup } from "@testing-library/react";
import CustomInput from "../components/input";

afterEach(cleanup);
describe("input test", () => {
  test("input exsists ", () => {
    const { getByPlaceholderText } = render(<CustomInput placeholder='num1' />);
    expect(getByPlaceholderText("num1"));
  });
  test("input recieved value", () => {
    const value = render(<CustomInput onChange={() => {}} value={7} />);
    value.getByDisplayValue("7");
  });
});

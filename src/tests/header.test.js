import React from "react";
import { render, cleanup } from "@testing-library/react";

import Header from "../components/header";

afterEach(cleanup);
describe("Header Test", () => {
  it("Header with given Text ", () => {
    const { getByText } = render(<Header />);
    getByText("Calculator");
  });
});

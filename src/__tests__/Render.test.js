//in this code how render concept in testing library in react

//toBeIntheDocument custoom jest matcher

import React from "react";
import { render, cleanup } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";
import Greeting from "../../Greeting";
test("renders a message", () => {
  const { container, getByText } = render(<Greeting />);
  expect(getByText("Hello, world!")).toBeInTheDocument();
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div>
      <h1>
        Hello, world!
      </h1>
    </div>
  `);
});

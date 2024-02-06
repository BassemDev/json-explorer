import React from "react";
import { render, screen } from "@testing-library/react";

import { App } from "./App";

test("renders learn react link", () => {
  // Arragne
  render(<App />);

  // Act
  const linkElement = screen.getByText(/Property/i);

  // Assert
  expect(linkElement).toBeInTheDocument();
});

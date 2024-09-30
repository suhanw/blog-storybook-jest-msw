import React from "react";
import { render, screen } from "@testing-library/react";
import DataComponent from "./DataComponent";

describe("DataComponent", () => {
  it("should fetch tasks", () => {
    render(<DataComponent />);

    expect(screen.getByText("This is DataComponent.")).toBeInTheDocument();
  });
});

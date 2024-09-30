import React from "react";
import { render, screen } from "@testing-library/react";
import DataComponent from "./DataComponent";

describe("DataComponent", () => {
  it("should fetch tasks", async () => {
    render(<DataComponent />);

    expect(screen.getByText("This is DataComponent.")).toBeInTheDocument();

    // wait until the `get` request promise resolves 
    await screen.findByText('"Yeah." -John Wick');
    expect(screen.getByText('"Yeah." -John Wick')).toBeInTheDocument();
  });
});

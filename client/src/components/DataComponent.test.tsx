import React from "react";
import { render, screen } from "@testing-library/react";
import DataComponent from "./DataComponent";
import { server } from "../mocks/server";
import { handlers } from "../mocks/handlers";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  // This will remove any runtime request handlers
  // after each test, ensuring isolated network behavior.
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe("DataComponent", () => {
  it("should fetch tasks", async () => {
    server.use(...handlers);

    render(<DataComponent />);

    expect(screen.getByText("This is DataComponent.")).toBeInTheDocument();

    // wait until the `get` request promise resolves
    await screen.findByText('"Yeah." -John Wick');
    expect(screen.getByText('"Yeah." -John Wick')).toBeInTheDocument();
  });
});

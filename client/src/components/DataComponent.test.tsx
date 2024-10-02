import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import DataComponent from "./DataComponent";
import { server } from "../mocks/server";
import { getUserMockHandler, mockResponseData } from "../api/get-user-mock";

beforeAll(() => {
  server.use(getUserMockHandler);
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
  it("should display user data", async () => {
    const { firstName, lastName } = mockResponseData;

    render(<DataComponent />);
    expect(screen.queryByText("This is DataComponent.")).toBeInTheDocument();
    expect(screen.queryByText("LOADING")).toBeInTheDocument();

    // wait until the `get` request promise resolves
    await waitFor(() => {
      expect(screen.queryByText("LOADING")).not.toBeInTheDocument();
      expect(
        screen.queryByText(`"Yeah." -${firstName} ${lastName}`)
      ).toBeInTheDocument();
    });
  });
});

import React from "react";
import { createRoot } from "react-dom/client";
import { enableMocking } from "./mocks/browser";
import DataComponent from "./components/DataComponent";

const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === "development";

function App({ message }: { message: string }) {
  return (
    <>
      <h1>{message}</h1>
      <DataComponent />
    </>
  );
}

window.addEventListener("DOMContentLoaded", async () => {
  if (isDev) {
    await enableMocking();
  }

  const root = createRoot(document.getElementById("root"));
  root.render(<App message="Hello World!!" />);
});

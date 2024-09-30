import React, { useEffect } from "react";

function DataComponent() {
  useEffect(() => {
    fetch("/user")
      .then((res) => res.json())
      .then((data) => console.log({ data }));
  }, []);

  return <div>This is DataComponent.</div>;
}

export default DataComponent;

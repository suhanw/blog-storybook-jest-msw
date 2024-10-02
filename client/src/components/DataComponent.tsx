import React from "react";
import { useGetUser } from "../api/get-user";

function DataComponent() {
  const { loading, error, firstName, lastName } = useGetUser();

  return (
    <div>
      <p>This is DataComponent.</p>
      {loading && <p>LOADING</p>}
      {!loading && error && <p role="alert">{error}</p>}
      {!loading && firstName && lastName && (
        <p>{`"Yeah." -${firstName} ${lastName}`}</p>
      )}
    </div>
  );
}

export default DataComponent;

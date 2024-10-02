import React, { useEffect, useReducer } from "react";
import { getUser } from "../api/get-user";

type State = {
  error?: string | null;
  quote?: string | null;
};

type Action = {
  type: string;
  error?: string | null;
  quote?: string | null;
};

const initialState: State = {
  error: null,
  quote: null,
};

function quoteReducer(state: State, action: Action): State {
  switch (action.type) {
    case "SUCCESS": {
      return {
        error: null,
        quote: action.quote,
      };
    }
    case "ERROR": {
      return {
        error: action.error,
        quote: null,
      };
    }
    default: {
      return state;
    }
  }
}

function DataComponent() {
  const [{ error, quote }, dispatch] = useReducer(quoteReducer, initialState);

  useEffect(() => {
    getUser()
      .then((data) => {
        dispatch({
          type: "SUCCESS",
          quote: `"Yeah." -${data.firstName} ${data.lastName}`,
        });
      })
      .catch((error) => {
        console.error(error);
        dispatch({
          type: "ERROR",
          error: "Uh oh. Something went wrong.",
        });
      });
  }, []);

  return (
    <div>
      <p>This is DataComponent.</p>
      {quote && <p>{quote}</p>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default DataComponent;

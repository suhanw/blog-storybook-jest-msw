import axios from "axios";
import { useReducer, useEffect } from "react";

export const API_ROUTE = "/user";

export type ResponseData = {
  id: string;
  firstName: string;
  lastName: string;
};

type State = {
  loading: boolean;
  error?: string | null;
  firstName?: string | null;
  lastName?: string | null;
};

type Action = {
  type: string;
  error?: string | null;
  firstName?: string | null;
  lastName?: string | null;
};

async function getUser(): Promise<ResponseData> {
  try {
    const { data } = await axios.get(API_ROUTE);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SUCCESS": {
      return {
        loading: false,
        error: null,
        firstName: action.firstName,
        lastName: action.lastName,
      };
    }
    case "ERROR": {
      return {
        loading: false,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
}

const initialState: State = {
  loading: true,
};

export function useGetUser() {
  const [{ loading, error, firstName, lastName }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    getUser()
      .then((data) => {
        dispatch({
          type: "SUCCESS",
          ...data,
        });
      })
      .catch(() => {
        dispatch({
          type: "ERROR",
          error: "Uh oh. Something went wrong.",
        });
      });
  }, []);

  return {
    loading,
    error,
    firstName,
    lastName,
  };
}

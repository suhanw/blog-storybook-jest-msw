import axios from "axios";

export const API_ROUTE = "/user";

export type ResponseData = {
  id: string;
  firstName: string;
  lastName: string;
};

export async function getUser(): Promise<ResponseData> {
  try {
    const { data } = await axios.get(API_ROUTE);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

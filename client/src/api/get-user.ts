import axios from "axios";

const API_ROUTE = "/user";

interface ResponseData {
  id: string;
  firstName: string;
  lastName: string;
}

export async function getUser(): Promise<ResponseData> {
  try {
    const { data } = await axios.get(API_ROUTE);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

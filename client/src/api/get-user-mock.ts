import { http, HttpResponse } from "msw";
import { API_ROUTE, ResponseData } from "./get-user";

export const mockResponseData: ResponseData = {
  id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
  firstName: "John",
  lastName: "Wick",
};

export const getUserMockHandler = http.get(API_ROUTE, function () {
  return HttpResponse.json(mockResponseData);
});

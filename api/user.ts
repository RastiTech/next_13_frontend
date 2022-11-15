import { getRequestOptions } from "../interfaces/api";
import createFetchRequest from "./index";

export const registerUser = async (data?: getRequestOptions) => {
  return await createFetchRequest({
    method: "POST",
    url: "/user/register",
    bodyOrQuery: data?.bodyOrQuery,
    options: data?.options,
    headers: data?.headers,
  });
};

export const getMe = async (data?: getRequestOptions) => {
  return await createFetchRequest({
    method: "GET",
    url: "/user/me",
    bodyOrQuery: data?.bodyOrQuery,
    options: data?.options,
    headers: data?.headers,
  });
};

export const loginUser = async (data?: getRequestOptions) => {
  return await createFetchRequest({
    method: "POST",
    url: "/user/login",
    bodyOrQuery: data?.bodyOrQuery,
    options: data?.options,
    headers: data?.headers,
  });
};

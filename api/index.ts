import { createFetchRequestOptions } from "../interfaces/api";
import config from "../utils/config";

const createFetchRequest = async (inputs: createFetchRequestOptions) => {
  const {
    method,
    headers,
    options: optionsObject,
    url,
    bodyOrQuery,
    contentType,
  } = inputs;

  const fetchOptions: RequestInit = {
    credentials: "include",
    method,
  };

  fetchOptions.headers = {
    ...new Headers(headers),
  };

  if (typeof window === "undefined") {
    const { cookies } = await import("next/headers");
    const nextCookies = cookies();

    const token = nextCookies.get(
      (process.env.NEXT_PUBLIC_COOKIE_NAME as string) || "qid"
    );

    if (token) {
      fetchOptions.headers = {
        ...fetchOptions.headers,
        cookie: "qid=" + encodeURIComponent(token?.value || ""),
      };
    }
  }

  let requestUrl = config.api_path + url;
  let requestParams = "";
  if (method === "GET" && bodyOrQuery) {
    const paramArray = Object.keys(bodyOrQuery).map((key) => {
      if (Array.isArray(bodyOrQuery[key])) {
        return bodyOrQuery[key]
          .map((value: string) => `${key}=${value}`)
          .join("&");
      }

      return `${key}=${bodyOrQuery[key]}`;
    });
    requestParams = paramArray.join("&");
  } else if (bodyOrQuery) {
    fetchOptions.body = JSON.stringify(bodyOrQuery);
  }
  if (requestParams) {
    requestUrl += "?" + requestParams;
  }

  try {
    const res = await fetch(requestUrl, {
      ...optionsObject,
      ...fetchOptions,

      headers: {
        ...optionsObject?.headers,
        ...fetchOptions.headers,
        "content-type": contentType || "application/json",
      },
    });

    const data = res.json();
    return data;
  } catch (e) {
    return e;
  }
};
export default createFetchRequest;

export interface createFetchRequestOptions {
  method: "GET" | "POST" | "PUT" | "DELETE";
  url: string;
  headers?: Headers;
  options?: {
    [key: string]: string;
  };
  bodyOrQuery?: {
    [key: string]: any;
  };
}

export interface getRequestOptions {
  headers?: Headers;
  options?: {
    [key: string]: string;
  };
  bodyOrQuery?: {
    [key: string]: string | string[];
  };
}

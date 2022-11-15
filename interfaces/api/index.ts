export interface createFetchRequestOptions {
  method: "GET" | "POST" | "PUT" | "DELETE";
  url: string;
  headers?: Headers;
  options?: {
    [key: string]: any;
  };
  bodyOrQuery?: {
    [key: string]: any;
  };
  contentType?: string;
}

export interface getRequestOptions {
  headers?: Headers;
  options?: {
    [key: string]: any;
  };
  bodyOrQuery?: {
    [key: string]: string | string[];
  };
}

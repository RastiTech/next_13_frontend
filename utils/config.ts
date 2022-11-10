const config = {
  api_path: process.env.NEXT_PUBLIC_API_PATH || "http://localhost:4000/api",
  cookie_name: process.env.NEXT_PUBLIC_COOKIE_NAME || "qid",
};

export default config;

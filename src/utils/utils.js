export const NODE_API_ENDPOINT =
  process.env.NODE_ENV === "production"
    ? "https://moviesappbackend.onrender.com"
    : "http://localhost:8080";

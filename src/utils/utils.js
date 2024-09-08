export const NODE_API_ENDPOINT =
  process.env.NODE_ENV === "production"
    ? "https://mega-bloging-backend.vercel.app"
    : "http://localhost:8080";

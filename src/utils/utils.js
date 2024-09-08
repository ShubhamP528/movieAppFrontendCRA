export const NODE_API_ENDPOINT =
  process.env.NODE_ENV === "production"
    ? "https://movies-app-backend-two.vercel.app"
    : "http://localhost:8080";

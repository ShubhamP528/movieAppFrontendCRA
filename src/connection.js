import io from "socket.io-client";

// Initialize the socket connection
// const socket = io("https://moviesappbackend-1.onrender.com"); // Adjust this to your server's address
// const socket = io("https://moviesappbackend.onrender.com"); // Adjust this to your server's address
// const socket = io("https://movies-app-backend-two.vercel.app"); // Adjust this to your server's address
const socket = io("http://localhost:8080"); // Adjust this to your server's address
export default socket;

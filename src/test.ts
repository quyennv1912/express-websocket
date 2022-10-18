import WebSocket from "ws";
import * as dotenv from "dotenv";
import * as process from "process";

dotenv.config();

const ws = new WebSocket(`ws://localhost:${process.env.PORT}`);

ws.on("open", () => {
  ws.send("Hello! This is client!");
});

ws.on("message", (data) => {
  console.log(`Received data from server: ${data}`);
});

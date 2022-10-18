import express from "express";
import * as http from "http";
import * as WebSocket from "ws";
import * as dotenv from "dotenv";

const app = express();
dotenv.config();
//initialize a simple http server
const server = http.createServer(app);

//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws: WebSocket) => {
  //connection is up, let's add a simple simple event
  ws.on("message", (message: string) => {
    //log the received message and send it back to the client
    console.log("received: %s", message);
    ws.send(`Hello, you sent -> ${message}`);
  });

  //send immediatly a feedback to the incoming connection
  ws.send("Hi there, I am a WebSocket server");
});

app.get("/", (req, res) => {
  res.send("Hello, World");
});

//start our server
server.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}...`);
});

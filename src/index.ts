import express from "express";
import cors from "cors";
import fs from "fs";

(async () => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());

  app.get("/", (req, res) => {
    res.json({ message: "Hello World" });
  });

  app.get("/help", (req, res) => {
    const data = fs.readFileSync("./files/help.txt", "utf8");
    res.send(data);
  });

  app.get("/arpr", (req, res) => {
    const data = fs.readFileSync("./files/arpRequest.c", "utf8");
    res.send(data);
  });

  app.get("/cotcpc", (req, res) => {
    const data = fs.readFileSync("./files/concurrentTcpClient.c", "utf8");
    res.send(data);
  });

  app.get("/cotcps", (req, res) => {
    const data = fs.readFileSync("./files/concurrentTcpServer.c", "utf8");
    res.send(data);
  });

  app.get("/ftc", (req, res) => {
    const data = fs.readFileSync("./files/fileTransferClient.c", "utf8");
    res.send(data);
  });

  app.get("/fts", (req, res) => {
    const data = fs.readFileSync("./files/fileTransferServer.c", "utf8");
    res.send(data);
  });

  app.get("/fullc", (req, res) => {
    const data = fs.readFileSync("./files/fullDuplexClient.c", "utf8");
    res.send(data);
  });

  app.get("/fulls", (req, res) => {
    const data = fs.readFileSync("./files/fullDuplexServer.c", "utf8");
    res.send(data);
  });

  app.get("/halfc", (req, res) => {
    const data = fs.readFileSync("./files/halfDuplexClient.c", "utf8");
    res.send(data);
  });

  app.get("/halfs", (req, res) => {
    const data = fs.readFileSync("./files/halfDuplexServer.c", "utf8");
    res.send(data);
  });

  app.get("/rcc", (req, res) => {
    const data = fs.readFileSync("./files/remoteCommandClient.c", "utf8");
    res.send(data);
  });

  app.get("/rcs", (req, res) => {
    const data = fs.readFileSync("./files/remoteCommandServer.c", "utf8");
    res.send(data);
  });

  app.get("/tcpc", (req, res) => {
    const data = fs.readFileSync("./files/tcpClient.c", "utf8");
    res.send(data);
  });

  app.get("/tcps", (req, res) => {
    const data = fs.readFileSync("./files/tcpServer.c", "utf8");
    res.send(data);
  });

  app.get("/udpc", (req, res) => {
    const data = fs.readFileSync("./files/udpEchoClient.c", "utf8");
    res.send(data);
  });

  app.get("/udps", (req, res) => {
    const data = fs.readFileSync("./files/udpEchoServer.c", "utf8");
    res.send(data);
  });

  app.listen(8080, () => {
    console.log("Server started on port 8080");
  });
})();

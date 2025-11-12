import express from "express";
import cors from "cors";
const app = express();
import getRepos from "./routes/getRepos.js";
import topicMap from "./routes/topicMap.js";
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world!!");
});
app.use("/api/repos", getRepos);
app.use("/api/domain", topicMap);
app.listen(5000, () => {
  console.log("Connected to PORT 5000");
});

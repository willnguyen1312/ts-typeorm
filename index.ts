import * as express from "express";

const app = express();

app.use((req, res) => {
  res.send("Hi there!");
});

app.listen(3000);

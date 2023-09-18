const express = require("express");
const app = express();

// middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    foo: "bar",
  });
});

app.get("/service", (req, res) => {
  res.json({
    foo: "service",
  });
});

app.post("/", (req, res) => {
  const { name } = req.body;

  res.json({
    hello: "welcome, " + name,
  });
});

app.listen(5300, () => {
  console.log("server run on port ", 5300);
});

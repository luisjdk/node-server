const express = require("express");
const app = express();
const tasks = require("./tasks.json");

const PORT = 3000;

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});

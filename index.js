const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;

const app = express();

app.use("/app", express.static(path.resolve(__dirname, "src", "app")));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve("src", "index.html"));
});

app.listen(PORT, () => console.log("Server run up!"));

const express = require("express");
const users = require("./data/user.json");
const app = express();

const PORT = 8081;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Home Page :-)",
    data: "hey",
  });
});

// app.get("/users", (req, res) => {
//   res.status(200).json({
//     message: "Success",
//     data: users,
//   });
// });

// app.get("/*", (req, res) => {
//   res.status(200).json({
//     message: "Not Built Yet",
//   });
// });

app.listen(PORT, () => {
  console.log(`Server is up and running on http://localhost:${PORT}`);
});

const express = require("express");
const users = require("./data/user.json");
const book = require("./data/books.json");
const app = express();

const PORT = 8081;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Home Page :-)",
    data: "hey",
  });
});

app.get("/users", (req, res) => {
  res.status(200).json({
    message: "Success",
    data: users,
  });
});

app.get("/book", (req, res) => {
  res.status(200).json({
    message: "Success",
    data: book,
  });
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((each) => each.id == id);
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User Doesn't Exist!!",
    });
  } else {
    return res.status(200).json({
      success: true,
      message: "User Found!",
      data: user,
    });
  }
});

// app.get("/*", (req, res) => {
//   res.status(200).json({
//     message: "Not Built Yet",
//   });
// });

app.listen(PORT, () => {
  console.log(`Server is up and running on http://localhost:${PORT}`);
});

app.post("/users", (req, res) => {
  const { id, name, surname, email } = req.body;
  const user = user.find((each) => each.id == id);
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User Doesn't Exist!!",
    });
  }
  users.push({
    id,
    name,
    surname,
    email,
  });
  return res.status(201).json({
    success: true,
    data: users,
  });
});

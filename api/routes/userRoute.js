const express = require("express");
const uuid = require("uuid");

const usersObj = require("../database/usersDb");

const router = express.Router();

router.get("/", (req, res) => {
  res.statusCode = 200;
  res.send({
    "available APIs": "4",
    "GET users": "/users",
    "PUT user": "/update/:id",
    "POST user": "/add",
    "GET user": "/user/:id"
  });
});

router.get("/users", (req, res) => {
  try {
    if (!usersObj || usersObj.length === 0) {
      res.statusCode = 404;
      res.send({ message: "Users not found!" });
    } else {
      res.statusCode = 200;
      res.send({ message: "Users retrieved", success: true, users: usersObj });
    }
  } catch (err) {
    res.statusCode = 500;
    res.send({ message: "Something went wrong!" });
  }
});

router.get("/user/:id", (req, res) => {
  try {
    const id = req.params.id;
    const user = usersObj.filter((user) => user.id === id);
    if (!user || user.length === 0) {
      res.statusCode = 404;
      res.send({ message: "User not found!" });
    } else {
      res.statusCode = 200;
      res.send({ success: true, user: user[0] });
    }
  } catch (err) {
    res.statusCode = 500;
    res.send({ message: "Something went wrong!" });
  }
});

router.post("/add", (req, res) => {
  try {
    const email = req.body.email;
    const firstName = req.body.firstName;
    const id = uuid.v4();
    usersObj.push({
      id,
      email,
      firstName,
    });
    res.statusCode = 200;
    res.send({ message: "User added", success: true });
  } catch (err) {
    res.statusCode = 500;
    res.send({ message: "Something went wrong!" });
  }
});

router.put("/update/:id", (req, res) => {
  try {
    const email = req.body.email;
    const firstName = req.body.firstName;
    const id = req.params.id;
    const index = usersObj.findIndex((user) => user.id === id);

    if (index < 0) {
      res.statusCode = 404;
      res.send({ message: "User not found!" });
    } else {
      usersObj[index].email = email;
      usersObj[index].firstName = firstName;
      res.statusCode = 200;
      res.send({ message: "User updated", success: true });
    }
  } catch (err) {
    console.log(err);
    res.statusCode = 500;
    res.send({ message: "Something went wrong!" });
  }
});

module.exports = router;

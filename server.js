const express = require("express");

const app = express();

// create routers
const admin = express.Router();
const student = express.Router();

// mount routers
app.use("/admin", admin);
app.use("/student", student);

// ---------------- ADMIN ROUTE ----------------
admin.get("/home", (req, res, next) => {
  console.log(req.baseUrl);       // /admin
  console.log(req.originalUrl);   // /admin/home
  console.log(req.path);          // /home

  res.send("Admin home route");
});

// ---------------- STUDENT ROUTE ----------------
student.get("/home", (req, res, next) => {
  console.log(req.baseUrl);       // /student
  console.log(req.originalUrl);   // /student/home
  console.log(req.path);          // /home

  res.send("Student home route");
});

// ---------------- COMMON ROUTE ----------------
app.get("/home", (req, res, next) => {
  console.log(req.baseUrl);       // empty
  console.log(req.originalUrl);   // /home
  console.log(req.path);          // /home

  res.send("Common home route");
});

// server
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));


const courses = [
  { id: 1, name: "MERN Stack", duration: "6 Months", fees: 25000 },
  { id: 2, name: "Python Full Stack", duration: "5 Months", fees: 20000 },
  { id: 3, name: "Java Development", duration: "4 Months", fees: 18000 },
  { id: 4, name: "Data Science", duration: "6 Months", fees: 30000 },
  { id: 5, name: "Cyber Security", duration: "3 Months", fees: 15000 },
  { id: 6, name: "Cloud Computing", duration: "4 Months", fees: 22000 },
  { id: 7, name: "AI & Machine Learning", duration: "6 Months", fees: 35000 },
  { id: 8, name: "DevOps", duration: "5 Months", fees: 27000 },
  { id: 9, name: "Mobile App Development", duration: "4 Months", fees: 20000 },
  { id: 10, name: "UI/UX Design", duration: "3 Months", fees: 15000 },
];

app.get("/", (req, res) => {
  res.render("home", { totalCourses: courses.length });
});

app.get("/courses", (req, res) => {
  res.render("courses", { courses });
});

app.get("/course/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return res.status(404).render("404");
  }

  res.render("course-details", { course });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.use((req, res) => {
  res.status(404).render("404");
});

const PORT = 3000
const HOST = "localhost";

app.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});

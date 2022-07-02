require("dotenv").config();

const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

app.set("view engine", "ejs");

app.use(express.static("./public"));

app.get("/", (req, res) => {
  const skills = require("./data/skills.json");
  const experiences = require("./data/experiences.json");
  const previousWorks = require("./data/previous_works.json");

  const data = { skills, experiences, previousWorks };

  res.render("home/index", data);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

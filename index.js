require("dotenv").config();

const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

app.set("view engine", "ejs");

app.use(express.static("./public"));

app.get("/", (req, res) => {
  const skills = require("./data/skills.json");
  const experiences = require("./data/experiences.json");
  const previousWorks = require('./data/previous_works.json').sort((a, b) => {
    return b.year - a.year;
  });

  const data = { skills, experiences, previousWorks };

  res.render("home/index", data);
});

app.get('*', (req, res) => {
  return res.redirect('/');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

//this will be my server files that will run the server on port 3000
const express = require("express");
const cors = require("cors");
const PORT = 8000;

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/getEducation", (req, res) => {
  const education = [
    { school: "applewood heights secondary school" },
    { school: "Humber College" },
  ];
  res.json(education);
  // res.send("hello this is a test for my getedu route.")
});

app.get("/getExperiance", (req, res) => {
  const experiances = [
    {
      lab: "Ive completed many in-school labs related to computer programming and specifically with web development.",
    },
    {
      atHome:
        "Ive create some projects at home as well such as a simple nodejs discord bot and simple react application.",
    },
  ];
  res.json(experiances);
  // res.send("Hello this is text inside my getExp route")
});

app.get("/getOverview", (req, res) => {
  const overview = [
    {
      desc: "I’ve demonstrated strong knowledge of JavaScript and web Design through projects I've created for school and for personal use and have worked on many java projects during our lab sessions in Humber. Over time from serving and dealing with customers at work, I’ve grown to understand the importance of good design and clear layouts. So, with this knowledge I go into working on my projects knowing that I should create a clear but creative layout and look.",
    },
  ];
  res.json(overview);
  // res.send("Hello this is my overview text inside the express route")
});

app.get("/getSkills", (req, res) => {
  const skills = [
    {
      skill:
        "Strong knowledge of web development, object-oriented programming, and database design/programming.",
    },
    {
      skill:
        "Familiar with Python and Unix shell scripting and mobile development.",
    },
    {
      skill:
        "Great communication traits, problem solving and working with people.",
    },
    {
      skill:
        "Advanced understanding of graphic design and how to incorporate into website design.",
    },
    {
      skill: "Fluent in English, French and Russian.",
    },
  ];
  res.json(skills);
  //   res.send("Some of my skills");
});

app.listen(PORT, () => {
  console.log(`the server is running on http:localhost${PORT}`);
});

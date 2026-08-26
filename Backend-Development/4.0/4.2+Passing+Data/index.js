import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const fNameLen = req.body["fName"].length;
  const lNameLen = req.body["lName"].length;
  const nameLen = fNameLen + lNameLen;
  res.render("index.ejs", { numberOfLetters: nameLen });
  
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
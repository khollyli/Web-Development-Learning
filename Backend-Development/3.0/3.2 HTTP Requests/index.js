import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Me</h1><p>Email: kaeli@gmail.com</p>")
});

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1><p>Hi, my name is Kaeli and I am a programmer!</p>")
});

app.listen(port, () => {
    console.log(`Server started on port ${port}.`);
});


import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var dayIndex = 0;

app.use(date);

app.get("/", (req, res) => {
    let type = "a weekday";
    let adv = "it's time to work hard";

    if (dayIndex === 0 || dayIndex === 6) {
        type = "the weekend";
        adv = "it's time to have fun";
    }

    res.render("index.ejs", {
        dayType: type, 
        advice: adv,});
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

function date(req, res, next) {
    const today = new Date();
    dayIndex = today.getDay();
    next();
}
import express from "express";
import path from "path";

import ejs from "ejs";
// Intialize the app
const app = express();

// public folder imports
import { medsc } from "./public/js/exports.js";

// Loading static files
app.use(express.static("./public/js/variables.js"));
app.use(express.static("./public/js/meditate.js"));
app.use(express.static("./views/meditate.ejs"));

app.get("/meditate", (req, res) => {
    res.render("meditate");
})

console.log(medsc);

// Ports
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Lazy bum on Port ${PORT}`);
});

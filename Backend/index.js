const express = require("express");
const app = express();
const port = 8055;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/register", (req, res) => {
    let { user, password } = req.query;
    res.send(`Standard Get response, Welcome ${user}!`);
    // console.log(req.params);
});

app.post("/register", (req, res) => {
    let { user, password } = req.body;
    res.send(`Standard Post response, Welcome ${user}!`);
    // console.log(req.body);
});

app.listen(port, () => {
    console.log(`Listening to Port : ${port}`);
});
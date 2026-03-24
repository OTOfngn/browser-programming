const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/", (req, res) => {
    res.send("Server is running! 1");
});

app.get("/api/message", (req, res) => {
    // res.json({
    //     message: "My first API works!",
    //     time: new Date()
    // });
    res.json({
        message: "Hello",
        course: "Browser Programming",
        year: 2026
    });
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
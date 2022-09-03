const express = require("express")
const todasRoutes = require("./todas.routes")

const app = express()

app.use(express.json())
app.use(todasRoutes);

app.get("/health", (req, res) => {
    return res.json("up");
});

app.listen(3333, () => console.log("Server up in 3333"));
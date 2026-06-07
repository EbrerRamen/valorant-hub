import express from "express";
import axios from "axios";

const app = express()
const port = process.env.port || 3000;
const API_URL = "https://valorant-api.com/v1/"

app.use(express.static("public"));

app.get("/", async (req, res) => {
    const result = await axios.get(API_URL + "agents");
    res.render("index.ejs", {
        // content: JSON.stringify(result.data)
        title: "Valorant Hub",
        description:
            "Your ultimate Valorant companion — explore agents, maps, weapons, and game modes. Built for players who want faster info and smarter gameplay."
    })
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
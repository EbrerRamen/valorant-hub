import express from "express";
import axios from "axios";

const app = express()
const port = process.env.port || 3000;
const API_URL = "https://valorant-api.com/v1/"

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs", {
        title: "Valorant Hub",
        description:
            "Your ultimate Valorant companion — explore agents, maps, weapons, and game modes. Built for players who want faster info and smarter gameplay."
    })
})

app.get("/agents", async (req, res) => {
    try {
        const result = await axios.get(API_URL + "agents");
        const agents = result.data.data.filter(
            (agent) => agent.isPlayableCharacter === true
        );

        res.render("agents.ejs", {
            agents
        })
    } catch (error) {
        console.log(error.message);
        res.send("Error loading agents");
    }

})

app.get("/agents/:uuid", async (req, res) => {
    try {
        const { uuid } = req.params;
        const result = await axios.get(API_URL + "agents/" + uuid);
        const agent = result.data.data;

        res.render("agent-details.ejs", {
            agent
        });
    } catch (error) {
        console.log(error.message);
        res.status(404).send("Agent not found or API error");
    }
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
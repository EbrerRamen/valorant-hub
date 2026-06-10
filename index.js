import express from "express";
import axios from "axios";

const app = express()
const port = process.env.port || 3000;
const API_URL = "https://valorant-api.com/v1/"

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs", {
        title: "Valorant Hub",
        currentPath: "/",
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
            agents,
            currentPath: "/agents",
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
            agent,
            currentPath: "/agents",
        });
    } catch (error) {
        console.log(error.message);
        res.status(404).send("Agent not found or API error");
    }
})

app.get("/gamemodes", async (req, res) => {
    try {
        const result = await axios.get(API_URL + "gamemodes");

        const gamemodes = result.data.data
            .filter(mode => mode.description && mode.displayIcon);

        gamemodes.sort((a, b) => {
            return (b.duration ? 1 : 0) - (a.duration ? 1 : 0);
        });

        res.render("gamemodes.ejs", {
            gamemodes,
            currentPath: "/gamemodes",
        });

    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error loading gamemodes");
    }
});

app.get("/maps", async (req, res) => {
    try {
        const result = await axios.get(API_URL + "maps");

        let maps = result.data.data;

        const featuredMaps = maps.filter(
            map => map.tacticalDescription
        );

        const excluded = ["The Range", "Basic Training"];

        const otherMaps = maps.filter(
            map =>
                !map.tacticalDescription &&
                !excluded.includes(map.displayName)
        );

        res.render("maps.ejs", {
            featuredMaps,
            otherMaps,
            currentPath: "/maps",
        });

    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error loading maps");
    }
});

app.get("/weapons", async (req, res) => {
    try {
        const result = await axios.get(API_URL + "weapons");
        const weapons = result.data.data.filter(
            w => w.weaponStats && w.displayIcon
        );
        res.render("weapons.ejs", {
            weapons,
            currentPath: "/weapons",
        })
    } catch (error) {
        console.log(error.message);
        res.send("Error loading agents");
    }

})

app.get("/weapons/:uuid", async (req, res) => {
  try {
    const { uuid } = req.params;
    
    const result = await axios.get(API_URL + "weapons/" + uuid);
    const weapon = result.data.data;
 
    let heroImage = weapon.displayIcon;

    if (weapon.defaultSkinUuid && weapon.skins) {
      const defaultSkin = weapon.skins.find(s => s.uuid === weapon.defaultSkinUuid);

      if (defaultSkin && defaultSkin.chromas && defaultSkin.chromas.length > 0 && defaultSkin.chromas[0].fullRender) {
        heroImage = defaultSkin.chromas[0].fullRender;
      }
    }

    res.render("weapon-details.ejs", {
      weapon,
      heroImage, 
      currentPath: "/weapons",
    });
  } catch (error) {
    console.log(error.message);
    res.status(404).send("Weapon not found or API error");
  }
});


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
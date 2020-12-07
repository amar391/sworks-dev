import express from "express";

import routes from "./routes/getPrime";
import config from "./config"

const app = express();
const PORT = config.port;

routes(app);

app.use((req, res, next) => {
    if(req.accepts('json')){
        res.send({ error: true, message: "Route not found" });
        return;
    }
})

app.listen(PORT, () => {
    console.log(`Listening at PORT ${PORT}`);
})
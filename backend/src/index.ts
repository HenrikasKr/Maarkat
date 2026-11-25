import {createServer} from "node:http";
import { stocks } from "./data/stocks.js";
import type { error } from "node:console";

const PORT = 3000;

const server = createServer((req, res) => {

    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173")
    
    const method = req.method;
    const url = req.url;

    if(method === "GET" && url === "/"){
        res.end("Welcome to Maarkat API");
    } else if (method === "GET" && url === "/api/stocks") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");

        res.end(JSON.stringify({stocks}))
    } else if (method === "GET" && url === "/api/health"){
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");

        res.end(JSON.stringify({
            status:"ok",
            service: "Maarkat API"
        }))
    } else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "application/json");

        res.end(JSON.stringify({
            error: "Not found",
        }))
    }
    
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
import express, {Request, Response, Router} from "express";
import bodyParser from "body-parser";
import {Routes} from "./routes";


const app = express();

const routes = new Routes(app);
routes.setRoutes();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const port = process.env.PORT || 7777;

const server = app.listen(port, ()=>{
    console.log("Now listening to PORT: " + port);
    console.log(port);
})
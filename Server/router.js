import  express  from "express";
import { getData } from "./Controller.js/controller.js";
const route = express.Router();


route.get("/", getData)
export {route}
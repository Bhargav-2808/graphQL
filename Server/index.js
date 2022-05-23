import express from 'express'
import cors from 'cors'
import {db} from './Database/database.js'
import bodyParser from 'body-parser';
import { route } from './router.js';

const app = express();
db;
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use("/" , route)

app.listen(2552,()=>{
    console.log("express is running")
});



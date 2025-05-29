import dotenv from "dotenv"
import {getConnectionDB} from "./db/index.js"
dotenv.config({
    path: './env'
})

getConnectionDB();
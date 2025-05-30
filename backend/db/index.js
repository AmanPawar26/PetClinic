import mysql from 'mysql2/promise'
import {DB_NAME} from "../constants.js"
import app  from '../app.js'


const pool = mysql.createPool({
 host: process.env.DB_HOST,
 user: process.env.DB_USER,
 password: process.env.DB_PASSWORD,
 database: process.env.DB_NAME,
 port: process.env.DB_PORT || 7000
})

// Get a connection from the pool
export const getConnectionDB = async () =>{
    try {
        const connection = await pool.getConnection()
        console.log(`\n ${DB_NAME} Database connected !!`);
        return connection;
    } catch (error) {
        console.log("Error connecting database", error)
        throw error;
    }
}

// Release connection back 
export const releaseConnectionDB = (connection) => {
    connection.release();
};



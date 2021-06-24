import mongoose from 'mongoose';
import config from "../helper/serverConfig"




export async function dbConnection() {
    try {

        await mongoose.connect(config.server.db, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Database Connected");
    } catch (error) {
        console.log("Database connection error", error);
    }
}
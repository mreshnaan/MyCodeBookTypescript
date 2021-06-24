import dotenv from 'dotenv';

dotenv.config();

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'http://localhost';
const SERVER_PORT = process.env.SERVER_PORT || 3000;
const DB_HOST: any = process.env.DB_HOST;


const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT,
    db: DB_HOST,

};

const serverConfig = {
    server: SERVER
}

export default serverConfig;
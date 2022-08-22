import { Sequelize } from "sequelize";
import { MessageFactory } from "./message";

const dbName = 'messageDb';
const username = 'sqluser';
const password = 'password';

const sequelize = new Sequelize(dbName, username, password, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

MessageFactory(sequelize);

export const db = sequelize;
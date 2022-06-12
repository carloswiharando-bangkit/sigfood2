import { Sequelize } from "sequelize";

const db=new Sequelize(process.env.SQL_DATABASE, process.env.SQL_USER,process.env.SQL_PASSWORD,{
    host:"34.101.58.181",
    dialect:"mysql"
});
export default db;
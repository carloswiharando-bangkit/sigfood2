import express from"express";
import db from "./config/db.js";
import router from "./routes/index.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();
import users from "./models/userModel.js";
const app = express();

if (process.env.INSTANCE_CONNECTION_NAME && process.env.NODE_ENV === 'production') {
    db.socketPath = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`;
  }

try {
    await db.authenticate();
    console.log("DB Connected");
    await users.sync(); //untuk bikin table
} catch {
    console.log("Db Error")
}

app.use(cors({ credentials:true}))
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(8080,()=>console.log('Server running at port 8080'));
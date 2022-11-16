import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
const app=express();
import dotenv from 'dotenv';
dotenv.config();

import Connection  from './database/db.js';
import Router from './routes/route.js';


app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',Router);

const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;



Connection(username,password);
// import router
const PORT=process.env.PORT || 5000;
app.listen(PORT,console.log(`Server running at port: ${PORT}`))
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import * as MirrorsStandartController from './controller/MirrorsStandartController.js';

dotenv.config();
const app = express();

const db = 'mongodb+srv://rostiko_455:qwerty12345@cluster0.49hwdwu.mongodb.net/?retryWrites=true&w=majority';

mongoose
.connect(db)
.then(() => {
    console.log('DB Start');
})

app.use(cors());
app.use(express.json());

app.get('/get-all-standart-mirrors',MirrorsStandartController.getAll);

app.listen(process.env.PORT,() => {
    console.log('Server start', process.env.PORT);
})
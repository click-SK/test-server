import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import * as MirrorsStandartController from './controller/MirrorsStandartController.js';

dotenv.config();
const app = express();

const db = 'mongodb+srv://roskichuk:qwerty12345@cluster0.nbpu5rm.mongodb.net/?retryWrites=true&w=majority';

mongoose
.connect(db)
.then(() => {
    console.log('DB Start');
})

app.use(cors());
app.use(express.json());

app.get('/get-all-standart-mirrors',MirrorsStandartController.getAll);
app.post('/create-standart-mirrors',MirrorsStandartController.create);
app.patch('/update-goods',MirrorsStandartController.updateGoods)
app.patch('/update-type',MirrorsStandartController.updateType)

app.listen(process.env.PORT,() => {
    console.log('Server start', process.env.PORT);
})
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { recipeController } from './controller/index';
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/recipe', recipeController);

app.get('/', (req, res) => {
    res.status(200).send({
        hello: 'Server working successfully'
    });
});

const password = process.env.PASSWORD_MONGOOSE;
const database = process.env.DATABASE;

app.listen(8080, () => {
    console.log("Listening on port 8080");
    mongoose.connect(process.env.DB_COLLECTION, { useUnifiedTopology: true })
        .then(()=>{  
            console.log("Connected to database");  
        })  
        .catch((err)=>{  
            console.log('connection failed');  
        }); 
})
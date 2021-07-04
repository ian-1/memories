inport express from 'express';
inport bodyParser from 'body-parser';
inport mongoose from 'mongoose';
inport cors from 'cors';
inport config from './config.js'

const app = express();

app.use(bodyParser.json({
  limit: "30mb",
  extended: true
}));
app.use(bodyParser.urlencoded({
  limit: "30mb",
  extended: true
}));
app.use(cors());

const CONNECTION_URL = `mongodb+srv://ian:${config.password}@cluster0.ey1iq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

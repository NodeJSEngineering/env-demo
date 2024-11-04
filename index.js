const express = require('express');
const webPush = require('web-push');
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// console.log(process.env.PORT) 
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
var corsOptions = {
  origin: ["http://localhost:4200","http://127.0.0.1:8081/","www.three.com"],
  default: "http://localhost:4200"
};
app.use(cors(corsOptions));
// app.options('*', cors()); 


app.get('/', (req, res) => {
    // res.send('rd');
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
    // console.log(process.env.SECRET_KEY, 'process.env.SECRET_KEY');
})

app.post('/subscribe', (req, res) => {
  const subscription = req.body;
  res.status(201).json({});
  const payload = JSON.stringify({ title: 'test', body:'body body' });

  console.log(subscription);

  webPush.sendNotification(subscription, payload).catch(error => {
    console.error(error.stack);
  });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`)
})
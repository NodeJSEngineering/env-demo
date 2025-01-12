const express = require('express');
require('dotenv').config();
const webPush = require('web-push');
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();
const port = process.env.PORT || 3000;

// console.log(process.env.PORT) 
app.use(express.json());

// body-parser is a piece of express middleware that reads a form's input and stores it as a javascript object accessible through req.body.
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
webPush.setVapidDetails(
  'mailto:example@yourdomain.org',
  process.env.PUBLIC_VAPID_KEY,
  process.env.PRIVATE_VAPID_KEY
);

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
    console.log(`Server is running on http://localhost:${port}.`)
})
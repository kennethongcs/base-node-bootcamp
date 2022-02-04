import express, { response } from 'express';
import { readFile } from 'fs';
import { rollDice } from './dice-roll.js';

const app = express();

const handleIncomingRequest = (request, response) => {
  console.log('request came in');
  response.send('<h1>Main Page</h1>');
};

const handleDiceRoll = (req, res) => {
  const filePath = '.' + req.url + '.js';
  console.log(filePath);
  console.log('request for dice-roll came in');
  readFile(filePath, (err, content) => {
    if (err) {
      console.log('Read error', err);
      return;
    }
    res.end(content, 'utf8');
  });
};

app.get('/', handleIncomingRequest);
app.get('/dice-roll', handleDiceRoll);

app.listen(3004);

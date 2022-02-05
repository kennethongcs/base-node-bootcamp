import express, { response } from 'express';
import { readFile } from 'fs';

const app = express();

const handleIncomingRequest = (request, response) => {
  console.log('request came in');
  response.send('<h1>Main Page</h1>');
};

const handleDiceRoll = (req, res) => {
  console.log('request for dice-roll came in');
  // readFile(filePath, (err, content) => {
  //   if (err) {
  //     console.log('Read error', err);
  //     return;
  //   }
  //   res.end(content, 'utf8');
  // });
  let dice1 = rollDice()
  res.send(`${dice1}`)

};

app.get('/', handleIncomingRequest);
app.get('/dice-roll', handleDiceRoll);

export const rollDice = () => {
  const roll = Math.ceil(Math.random() * 6);
  return roll;
};


app.listen(3004);

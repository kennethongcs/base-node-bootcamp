import express from 'express';
import { readFile } from 'fs';

const app = express();

app.get('/location/:index/', (req, res, next) => {
  console.log(req.params);
  readFile('data.json', (err, content) => {
    if (err) {
      console.log('Read Error', err);
      return;
    }
    const jsonObj = JSON.parse(content);
    res.send(jsonObj.names[req.params.index]);
  });
});

app.listen(3004);

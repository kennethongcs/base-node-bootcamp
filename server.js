import { createServer } from 'http';

const handleIncomingRequests = (request, response) => {
  console.log('Received request');

  response.end('Yay!', 'utf8');
};

createServer(handleIncomingRequests).listen(3004);

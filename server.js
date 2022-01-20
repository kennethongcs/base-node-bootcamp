import { createServer } from 'http';
import { readFile } from 'fs';

const port = process.argv[2];

const handleIncomingRequests = (request, response) => {
  console.log('Request URL: ', request.url);

  const filePath = '.' + request.url;

  readFile(filePath, 'utf8', (err, content) => {
    if (err) {
      console.log('Error', err);
      response.writeHead(404, {});
      // add a response to be displayed in window when error is found
      response.end("Sorry we couldn't get your file.");
      return;
    }
    response.writeHead(200, { rocketacademy: 'online' });
    // sends content from url
    response.end(content, 'utf8');
  });
};

createServer(handleIncomingRequests).listen(port);

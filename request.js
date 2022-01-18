import { get } from 'http';

const handleResponse = (response) => {
  let data = '';

  response.on('data', (chunk) => {
    data += chunk;
  });
  response.on('end', () => {
    console.log('Response data:', data);
  });
};

get('http://localhost:3004', handleResponse).on('error', (err) => {
  if (err) {
    console.log('Error', err);
  }
});

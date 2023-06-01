import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  // Make an HTTP request
  const response = http.get('https://www.reetro.app/');

  // Access response status code and content
  console.log(`Response status code: ${response.status}`);
  console.log(`Response body: ${response.body}`);

  // Simulate user think time
  sleep(1);
}

export const options = {
  vus: 50, // Number of virtual users to simulate
  duration: '1m', // Duration of the test
};

import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
  stages: [
    { duration: '1m', target: 10 }, // Ramp up to 50 virtual users over 1 minute
    { duration: '10m', target: 10 }, // Stay at 50 virtual users for 3 minutes
    { duration: '1m', target: 0 }, // Ramp down to 0 virtual users over 1 minute
  ],
};

export default function () {
  // Make an HTTP request
  const response = http.post('https://www.reetro.app/api/auth/pre-signin');

  // Check response status code
  check(response, {
    'is status 200': (r) => r.status === 200,
  });

  // Simulate user think time
  sleep(1);
}

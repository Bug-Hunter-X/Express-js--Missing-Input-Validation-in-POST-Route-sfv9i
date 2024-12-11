# Express.js Input Validation Vulnerability

This repository demonstrates a common vulnerability in Express.js applications: the lack of input validation before processing requests.

The `bug.js` file shows a POST route that's vulnerable because it doesn't check the validity of incoming JSON data.  Malformatted JSON can cause the server to crash.

The `bugSolution.js` file provides a corrected version with proper input validation to prevent such crashes.

## How to Reproduce the Bug
1. Clone this repository.
2. Run `npm install` to install Express.js.
3. Run `node bug.js` to start the server.
4. Send a malformed JSON payload (e.g., using curl or Postman) to the `/users` endpoint. Observe the server crashing.

## Solution
The solution involves adding input validation before processing `req.body`.  The `bugSolution.js` demonstrates best practices for handling such situations.
const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  try {
    const user = JSON.parse(JSON.stringify(req.body));
    // Validate user input here
    if (!user.name || !user.email) {
      return res.status(400).send({ error: 'Name and email are required' });
    }
    console.log('Received user:', user);
    res.status(201).send();
  } catch (error) {
    console.error('Invalid JSON:', error);
    res.status(400).send({ error: 'Invalid JSON format' });
  }
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
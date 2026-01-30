const express = require('express');

const app = express();

// Middleware to parse JSON body
app.use(express.json());

/**
 * POST /example
 * Receives data from request body
 */
app.post('/example', (req, res) => {
  const { name, Id } = req.body;

  console.log('Name:', name);
  console.log('ID:', Id);

  res.status(201).json({
    message: 'POST request successful',
    receivedData: { name, Id }
  });
});

/**
 * GET /users
 */
app.get('/users', (req, res) => {
  res.send('Users Page');
});

/**
 * GET /users/:userId
 * Uses route params + query params
 * Example:
 * /users/4?name=ames&email=ema@gmail.com
 */
app.get('/users/:userId', (req, res) => {
  const { userId } = req.params;
  const { name, email } = req.query;

  console.log('User ID:', userId);
  console.log('Name:', name);
  console.log('Email:', email);

  res.json({
    userId,
    name,
    email
  });
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

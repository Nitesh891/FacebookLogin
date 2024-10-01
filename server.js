const express = require('express');
const helmet = require('helmet');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Use Helmet to set various HTTP headers for security
app.use(helmet());

// Middleware to parse JSON requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the main HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route to receive form data
app.post('/receive-data', (req, res) => {
  const { email, password } = req.body;
  console.log('Email:', email);
  console.log('Password:', password);
  res.sendStatus(200); // Send a success status
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

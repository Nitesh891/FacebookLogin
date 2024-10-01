const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const helmet = require('helmet'); // Import helmet
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet()); // Use helmet for security
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Endpoint to receive data
app.post('/receive-data', (req, res) => {
  const { email, password } = req.body;
  console.log('Received data:', { email, password });
  res.sendStatus(200); // Send back a 200 response
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

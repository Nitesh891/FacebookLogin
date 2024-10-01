const express = require('express');
const path = require('path');
const helmet = require('helmet'); // Import Helmet for security headers

const app = express();
const PORT = process.env.PORT || 3000;

// Use Helmet to add security headers
app.use(helmet());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

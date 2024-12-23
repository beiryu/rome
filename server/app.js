const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8808;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

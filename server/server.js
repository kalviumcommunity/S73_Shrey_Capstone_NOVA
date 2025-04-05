const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/dbconfig');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json()); // Middleware for parsing JSON

app.use('/api/users', userRoutes); // Routes

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🌐 Server running on http://localhost:${PORT}`);
});

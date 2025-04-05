require('dotenv').config();
const express = require('express');
const connectDB = require('./config/dbconfig');
const cors = require('cors');


const app = express();


app.use(cors());
app.use(express.json()); 


connectDB();


app.get('/', (req, res) => {
  res.send('🚀 API is running...');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🌐 Server running on http://localhost:${PORT}`);
});

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const filmRoutes = require('./routes/filmRoutes');
const authRoutes = require('./routes/authRoutes');
const app = express();
connectDB();
app.use(cors());
app.use(express.json()); // untuk parsing JSON
app.get('/', (req, res) => {
    res.send('Film Backend API is running ✅');
  });
app.use('/api/auth', authRoutes);
app.use('/api/films', filmRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port
${PORT}`));
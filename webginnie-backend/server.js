const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes'); 

// Use auth routes
app.use('/api', authRoutes); // ✅ Mount at /api/signup and /api/login


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api', authRoutes); // ✅ NEW

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB connected");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error("Connection failed", err.message);
});
// This code sets up an Express server with MongoDB connection and routes for products and authentication.
// It uses environment variables for configuration and includes error handling for the database connection.
const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// MongoDB Connection
const dbURI = "mongodb+srv://sateeshchowhan:sateesh18@cluster0.fkuss0m.mongodb.net/task";
mongoose.connect(dbURI)
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT} and connected to MongoDB`)))
  .catch(err => console.log(err));

// Routes
app.use('/api/products', productRoutes);

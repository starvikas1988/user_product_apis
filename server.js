const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/products', productRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const itemsRoutes = require('./routes/items');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/items', itemsRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./database/knexfile')[environment];
const database = require('knex')(configuration);
const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/api/v1/all-products', async (request, response) => {
  try {
    const product = await database('product').select();
    response.status(200).json(product);
  } catch(error) {
    response.status(500).json({ error });
  }
});

app.listen(app.get('port'), () => {
  console.log(`ProductData is running on http://localhost:${app.get('port')}.`);
});
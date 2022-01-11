const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.set('port', process.env.PORT || 3001);


app.listen(app.get('port'), () => {
  console.log(`ProductData is running on https://localhost:${app.get('port')}.`);
});

app.get('/api/v1/all-products', async (request, response) => {
  try {
    const product = await database('product').select();
    response.status(200).json(product);
  } catch(error) {
    response.status(500).json({ error });
  }
});

app.get('/api/v1/favorites', async (request, response) => {
  try {
    const favorites = await database('product').where('favorite', true);
    response.status(200).json(favorites);
  } catch(error) {
    response.status(500).json({ error });
  }
});

app.put('/api/v1/favorites/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const matchingProductFromDB = await database('product').where('id', '=', id);
    const favoritePropertyOfProductFromDB = matchingProductFromDB[0].favorite;

    const updatedProduct = await database('product').where('id', '=', id)
      .update({ favorite: !favoritePropertyOfProductFromDB }, ['id', 'name', 'color', 'img_url', 'category', 'favorite']);
      
    response.status(201).json(updatedProduct[0]);
  } catch (error) {
    response.status(500).json({ error });
  }
});

app.get('/api/v1/outfits', async (request, response) => {
  try {
    const outfits = await database('outfit').select();
    return response.status(200).json(outfits);
  } catch(error) {
    return response.status(500).json({ error });
  }
});

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
    return response.status(200).json(product);
  } catch(error) {
    return response.status(500).json({ error });
  }
});

app.get('/api/v1/favorites', async (request, response) => {
  try {
    const favorites = await database('product').where('favorite', true);
    return response.status(200).json(favorites);
  } catch(error) {
    return response.status(500).json({ error });
  }
});

app.put('/api/v1/favorites/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const matchingProductFromDB = await database('product').where('id', '=', id);
    const favoritePropertyOfProductFromDB = matchingProductFromDB[0].favorite;

    const updatedProduct = await database('product').where('id', '=', id)
      .update({ favorite: !favoritePropertyOfProductFromDB }, ['id', 'name', 'color', 'img_url', 'category', 'favorite']);

    return response.status(201).json(updatedProduct[0]);
  } catch (error) {
    return response.status(500).json({ error });
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

app.post('/api/v1/outfits', async (request, response) => {
  const outfit = request.body;

  for (let requiredParameter of ['top_id', 'bottom_id']) {
    if (!outfit[requiredParameter]) {
      return response
        .status(422)
        .send({ error: `Expected format: { top_id: <number>, bottom_id: <number> }. You're missing a "${requiredParameter}" property.` });
    }
  }

  try {
    const existingOutfit = await database('outfit')
      .where({
        top_id: outfit.top_id,
        bottom_id: outfit.bottom_id,
        accessory_id: outfit.accessory_id
      });

    if (existingOutfit.length) {
      return response.status(400).send({ error: `Outfit already exists` });
    }
    
    const newOutfit = await database('outfit').insert(outfit, ['id', 'top_id', 'bottom_id', 'accessory_id']);
    return response.status(201).json({ newOutfit });
  } catch (error) {
    return response.status(500).json({ error });
  }
});

app.delete('/api/v1/outfits/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const deletedOutfitIdFromDB = await database('outfit').where('id', '=', id)
      .del(['id']);
      
    return response.status(201).json(deletedOutfitIdFromDB[0]);
  } catch (error) {
    return response.status(500).json({ error });
  }
});
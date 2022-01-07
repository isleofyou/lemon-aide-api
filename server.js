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


// app.post('/api/v1/favorite-product', async (request, response) => {
//   const product = request.body;

//   if(!product.id) {
//     response
//       .status(422)
//       .send({ error: 'Id is required.'});
//   }

//   try {
//     const id = await database('product').insert(product, 'id');
//     response.status(201).json({ id })
//   } catch (error) {
//     response.status(500).json({ error });
//   }
// });

app.put('/api/v1/favorite/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const product = await database('product')
      .where('id', '=', id)
    const isFavorite = product[0].favorite;
    await database('product')
      .where('id', '=', id)
      .update({favorite: !isFavorite});
    response.status(201).json(product);
  } catch (error) {
    response.status(500);
    console.error(error);
  }
});

// app.post('/api/v1/favorite-product');

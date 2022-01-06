const productData = require('../../productData');

const createProduct = async (knex, product) => {
  const productId = await knex('product').insert({
    name: product.name,
    color: product.color,
    img_url: product.img_url,
    category: product.category,
  }, 'id');
  
  return productId;
};

exports.seed = async (knex) => {
  try {
    await knex('product').del();

    let productPromises = productData.map(product => {
      return createProduct(knex, product);
    });
    
    return Promise.all(productPromises);
  } catch (error) {
    console.log(`Error seeding data: ${error}`);
  }
};
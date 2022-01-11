exports.up = function(knex) {
  return knex.schema
    .createTable('outfit', function(table) {
      table.increments('id').primary();
      table.integer('top_id').references('id').inTable('product');
      table.integer('bottom_id').references('id').inTable('product');
      table.integer('accessory_id').references('id').inTable('product');

      table.timestamps(true, true);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('outfit');
};
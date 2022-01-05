exports.up = function(knex) {
  return knex.schema
    .createTable('product', function(table) {//table name should be singular
      table.increments('id').primary();
      table.string('name');
      table.string('color');
      table.string('img_url');
      table.string('category');
      table.boolean('favorite').notNullable().defaultTo(false);

      table.timestamps(true, true);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('product');
};
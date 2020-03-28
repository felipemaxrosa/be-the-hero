//Sempre é responsável pela migration, que é executado quando a migration é iniciada
//----------------------------------------------------------------------------------
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function (table) {
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();
  });
};

//Caso precise voltar atrás o que você quer fazer?
//---------------------------------------------------
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};

export function up(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table.string('first_name');
    table.string('last_name');
    table.string('gender');
  });  
};

export function down(knex, Promise) {
  return knex.schema.dropTable('users');
};

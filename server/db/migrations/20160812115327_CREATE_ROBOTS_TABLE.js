export function up(knex, Promise) {
  return knex.schema.createTable('robots', table => {
    table.increments();
    table.integer('user_id').index().notNullable().references('users.id').onDelete('CASCADE');
    table.string('name');
    table.string('url');
  });  
};

export function down(knex, Promise) {
  return knex.schema.dropTable('robots');
};

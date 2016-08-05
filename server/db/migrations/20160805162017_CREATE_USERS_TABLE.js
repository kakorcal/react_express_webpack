exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table=>{
    table.increments();
    table.string('full_name');
    table.string('gender');
    table.text('avatar');
    table.string('email');
    table.string('company');
    table.string('job_title');
    table.text('description');
  });  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')  
};

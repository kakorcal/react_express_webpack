exports.seed = function(knex, Promise) {
  const mock = require('./SEED.js');
  return knex('users').del()
    .then(()=>{

    });
};

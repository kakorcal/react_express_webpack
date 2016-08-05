exports.seed = function(knex, Promise) {
  const users = require('../MOCK_DATA.js');
  return knex('users').del()
    .then(()=>{
      return Promise.all(users.map(user=>{
        return knex('users').insert({
          full_name: user.full_name,
          gender: user.gender,
          avatar: user.avatar,
          email: user.email,
          company: user.company,
          job_title: user.job_title,
          description: user.description
        });
      }));
    });
};
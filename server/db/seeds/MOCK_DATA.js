import users from '../mock/USERS.json'
import robotList from '../mock/ROBOTS.json'

export function seed(knex, Promise) {
  return knex('users').del()
    .then(() => {
      return knex('users').insert(users).returning('id');
    })
    .then(ids => {
      const list = robotList.reduce((acc, entries, idx) => {
        entries.robots.forEach(robot => {
          robot.user_id = ids[idx];
          acc.push(robot);
        });
        return acc;
      }, []);

      return knex('robots').insert(list);
    });
};

import express from 'express'
import knex from '../db/knex'

const router = express.Router();

router.get('/', (req, res)=>{
  knex('users').then(users=>{
    res.send(users);
  }).catch(err=>{
    res.send(err);
  });
});

router.post('/', (req, res)=>{
  knex('users').insert(req.body.user, '*').then(([user])=>{
    res.send(user);
  }).catch(err=>{
    res.send(err);
  });
});

router.get('/:id', (req, res)=>{
  knex('users').where('id', +req.params.id).first().then(user=>{
    knex('robots').where('user_id', +req.params.id).then(robots=>{
      res.send(Object.assign({}, user, {robots}));
    });
  });
});

router.put('/:id', (req, res)=>{
  knex('users').where('id', +req.params.id).update(req.body.user, '*').then(([user])=>{
    res.send(user);
  });
});

router.delete('/:id', (req, res)=>{
  knex('users').where('id', +req.params.id).del().then(()=>{
    res.send('User Deleted');
  });
});

export default router
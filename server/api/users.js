const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', (req, res)=>{
  knex('users').then(users=>{
    res.send(users);
  });
});

router.post('/', (req, res)=>{
  knex('users').insert(req.body.user).then(()=>{
    
  });
});

router.get('/:id', (req, res)=>{
  knex('users').where('id', +req.params.id).then(user=>{
    res.send(user);
  });
});

router.put('/:id', (req, res)=>{
  knex('users').where('id', +req.params.id).update(req.body.user).then(()=>{

  });
});

router.delete('/:id', (req, res)=>{
  knex('users').where('id', +req.params.id).del().then(()=>{

  });
});

module.exports = router;
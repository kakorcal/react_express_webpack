const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', (req, res)=>{
  knex.select(['u.full_name', 'u.gender', 'u.avatar', 'u.company']).from('users as u')
    .then(users=>{
      res.send(users);
    })
    .catch(err=>{
      res.send(err);
    });
});

router.post('/', (req, res)=>{
  knex('users').insert(req.body.user)
    .then(()=>{
      res.send('User Created');
    })
    .catch(err=>{
      res.send(err);
    });
});

router.get('/:id', (req, res)=>{
  knex('users').where('id', +req.params.id)
    .then(user=>{
      res.send(user);
    })
    .catch(err=>{
      res.send(err);
    });
});

router.put('/:id', (req, res)=>{
  knex('users').where('id', +req.params.id).update(req.body.user)
    .then(()=>{
      res.send('User Updated');
    })
    .catch(err=>{
      res.send(err);
    });
});

router.delete('/:id', (req, res)=>{
  knex('users').where('id', +req.params.id).del()
    .then(()=>{
      res.send('User Deleted');
    })
    .catch(err=>{
      res.send(err);
    });
});

module.exports = router;
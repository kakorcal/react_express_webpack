import express from 'express'
import knex from '../db/knex'

const router = express.Router({mergeParams: true});

router.get('/', (req, res)=>{
  knex('robots').where('user_id', +req.params.user_id).then(robots=>{
    res.send(robots);
  });
});

router.post('/', (req, res)=>{
  knex('robots')
    .insert(Object.assign({}, req.body.robots, {user_id: +req.params.user_id}), '*')
    .then(([robot])=>{
      res.send(robot);
    });
});

router.get('/:id', (req, res)=>{
  knex('robots').where('id', +req.params.id).first().then(robot=>{
    res.send(robot);
  });
});

router.put('/:id', (req, res)=>{
  knex('robots').where('id', +req.params.id).update(req.body.robot, '*').then(([robot])=>{
    res.send(robot);
  });
});

router.delete('/:id', (req, res)=>{
  knex('robots').where('id', +req.params.id).del().then(()=>{
    res.send('Robot Deleted');
  });
});

export default router
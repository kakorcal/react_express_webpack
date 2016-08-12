import express from 'express'
import bodyParser from 'body-parser'

const app = express();

app.listen(3000, ()=>{
  console.log('Listening to port 3000');
});
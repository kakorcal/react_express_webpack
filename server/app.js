import express from 'express'
import bodyParser from 'body-parser'

const app = express();
const port = process.env.PORT || 2222;

app.listen(port, err => {
  if(err) console.log(err);
  console.log(`Listening to port ${port}`);
});
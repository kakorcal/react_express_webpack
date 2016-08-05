const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 3000;
// const routes = require('./api/index');

app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

if(process.env.NODE_ENV !== 'production'){
  const webpack = require('webpack');
  const config = require('../webpack.dev.config');
  const complier = webpack(config);

  app.use(require('webpack-dev-middleware')(complier, {
    publicPath: config.output.publicPath,
    stats: {colors: true}
  }));

  app.use(require('webpack-hot-middleware')(complier));  
}

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'))
});

// app.use((req, res, next)=>{
//   const err = new Error('Oops!!');
//   err.status = 404;
//   next(err);
// });

// app.use((err, req, res)=>{
//   res.status(err.status || 500);
//   res.end(JSON.stringify({message: err.message, error: {}}));
// });

app.listen(PORT, (err)=>{
  if(err) console.log(err);
  console.log(`Listening to port ${PORT}`);
});
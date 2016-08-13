import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import routes from './routes/index'
import morgan from 'morgan'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

const app = express();
const entryPoint = path.resolve('client/index.html');
// using export default adds a default property on object being exported
const config = require(path.resolve('webpack/webpack.config')).default;
const compiler = webpack(config);
const port = process.env.PORT || 2222;
const env = process.env.NODE_ENV;

app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

if(env !== 'production'){
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {
      colors: true,
      chunkModules: false
    }
  }));
  app.use(webpackHotMiddleware(compiler));
}

app.use('/api/users', routes.users);
app.use('/api/users/:user_id/robots', routes.robots);

app.get('/', (req, res)=>{
  res.sendFile(entryPoint);
});

app.use((req, res, next)=>{
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res)=>{
  res.status(err.status || 500);
  res.end(JSON.stringify({message: err.message, error: {}}));
});

app.listen(port, err => {
  if(err) console.log(err);
  console.log(`Listening to port ${port}`);
});
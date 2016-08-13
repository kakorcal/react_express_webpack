import validate from 'webpack-validator'
import dev from './webpack.dev.config'

let config;
switch(process.env.npm_lifecycle_event){
  case 'dev':
    config = dev;
    break;
  case 'debug':
    config = dev;
    break;
  default:
    throw 'Invalid Command';
}

export default validate(config)
import BaseProd from './Base.prod';

let Base = BaseProd;
if (process.env.NODE_ENV === 'production') {
  Base = require('./Base.dev');
}

export default Base;

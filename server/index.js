require('dotenv').config('../.env');
const ts = require('ts-node');
const base = require('../tsconfig.json');
const ext = require('./tsconfig.json');

Object
  .keys(ext)
  .forEach(key => {
    if (!base[key] || base[key].substr) {
      base[key] = ext[key];
    } else if (base[key].length) {
      base[key] = [
        ...base[key],
        ...ext[key],
      ];
    } else {
      base[key] = {
        ...base[key],
        ...ext[key],
      };
    }
  });
ts.register(base);
require('./index.ts');

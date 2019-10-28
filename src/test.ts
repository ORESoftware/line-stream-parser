'use strict';

import LineParser from './main';
import {Transform} from "stream";

const t = new Transform({
  transform(chunk, enc, cb){
    cb(null, Buffer.from([Buffer.from('prepend:'),chunk]));
  }
});

t.pipe(new LineParser()).on('data', l => {
  console.log('line:', String(l));
});

const input = [
  'abc',
  '\n',
  'def\nghijk\nlmnop',
  '\nqrstu',
  '\nvwxyz'
];

for(const line of input){
  // console.log('t:', line)
  t.write(Buffer.from(line));
}

t.end();

#!/usr/bin/env node
'use strict';

import LineParser from './main';

process.stdin.resume().pipe(new LineParser()).on('data', d => {
  console.log(String(d));
});

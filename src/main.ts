'use strict';

import * as stream from 'stream';
import * as assert from 'assert';

export const r2gSmokeTest = function () {
  // r2g command line app uses this exported function
  return true;
};

type EVCb<T> = (err: any, T: any) => void;

export interface JSONParserOpts {
  debug?: boolean,
  delimiter?: string,
  trackBytesWritten?: boolean,
  trackBytesRead?: boolean,
  includeByteCount?: boolean
}

export const RawJSONBytesSymbol = Symbol('raw.json.bytes');
export const JSONBytesSymbol = Symbol('json.bytes');

export class LineParser extends stream.Transform {
  
  buffer = Buffer.from('');
  debug = false;
  delimiter = '\n';
  
  
  constructor(opts ?: JSONParserOpts) {
    
    super({objectMode: true});
    
    
    if (opts && 'debug' in opts) {
      assert.strictEqual(typeof opts.debug, 'boolean', '"debug" option should be a boolean value.');
      this.debug = opts.debug;
    }
    
    if (opts && 'delimiter' in opts) {
      assert(opts.delimiter && typeof opts.delimiter === 'string', '"delimiter" option should be a string value.');
      this.delimiter = opts.delimiter;
    }
  }
  
  
  _transform(chunk: Buffer, encoding: string, cb: Function) {
    
    const c = Buffer.concat([this.buffer, chunk]);
    let b: Array<any> = [];
    
    for (let v of c.values()) {
      
      if (v === 10) {  // newline
        if (b.length > 0) {
          this.push(Buffer.from(b));
          b = [];
        }
        continue;
      }
      
      b.push(v);
    }
    
    this.buffer = Buffer.from(b);
    
    cb();
    
  }
  
  _flush(cb: Function) {
    
    if(this.buffer.length > 0){
      this.push(this.buffer);
      this.buffer = Buffer.from('');
    }
    
    cb();
  }
  
}

export default LineParser;





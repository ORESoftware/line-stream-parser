
<div align="right">

Travis build status:
[![Build Status](https://travis-ci.org/ORESoftware/line-stream-parser.svg?branch=master)](https://travis-ci.org/ORESoftware/typescript-library-skeleton)

CircleCI build status:
[![CircleCI](https://circleci.com/gh/ORESoftware/line-stream-parser/tree/master.svg?style=svg)](https://circleci.com/gh/ORESoftware/typescript-library-skeleton/tree/master)

</div>

## LSP - Line Stream Parser

> Take a stream of characters and split by newlines (or custom delimiter)


### Install

```shell

npm i '@oresoftware/line-stream-parser'

```

### CLI interface

```shell

 echo 'some\nchars' | parse_lines

```


### Node.js interface

```typescript

import LineParser from '@oresoftware/line-stream-parser'

process.stdin.resume().pipe(new LineParser()).on('data', d => {
  console.log(String(d));
});


```

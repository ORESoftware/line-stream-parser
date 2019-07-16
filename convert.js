

// console.log(Array.from(Buffer.from('\n').values()))


function stringToUInt8 (s, offset) {
  return Buffer.from(s).readUInt8(offset)
}

console.log(stringToUInt8('\n'))

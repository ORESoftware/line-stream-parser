'use strict';




let i = 0;

const getRandomStr = () => {
  let i = 0, res = '';
  while (i++ < 12) {
    res += String.fromCharCode(65 + Math.floor(Math.random() * 26));
  }
  return res;
  
};

(function run() {
  
  console.info(i++, 'just saying hi.');
  console.log(i++, 'shit hit the fan');
  
  setTimeout(run, 200);
  
})();

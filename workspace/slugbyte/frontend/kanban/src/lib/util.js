'use strict';

export let renderIf = (test, result) => {
  if(test) return result;
};

export let classToggle = (opts) => {
  let className = '';
  for(let key in opts) {
    if(opts[key]) className += key + ' ';
  }
  return className;
};


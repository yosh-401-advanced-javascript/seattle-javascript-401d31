
// call an function that does not exist and the program will crash
let data = {};
data.name();

// call a function that does not exists in a try block and handle the error in a catch block
try {
  let data = {};
  data.name();
} catch (err) {
  console.error(err.message);
}

// explicitly create and throw a custom error
try {
  let data = {name: 'adalove'};
  if (data.name !== 'ada lovelace')
    throw new Error('expected name to be "ada lovelace"');
} catch(err) {
  console.error(err.message);
}

const parser = require('./parser');

let filePath = '../minimal.html';
if (process.argv.length > 2) {
  filePath = argv[2];
}
parser(filePath);

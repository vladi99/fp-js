const zip = require('./zip')

function transpose(arr) {
  return zip(...arr);
}

module.exports = transpose;

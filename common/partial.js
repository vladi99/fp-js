const isIterable = require('./isIterable');

function partial(func, ...args) {
  return (...otherArgs) => {
    const res = func(...args);
    const partialArgs = isIterable(res) ? res : [res];
    return func(...partialArgs, ...otherArgs);
  }
}

module.exports = partial;

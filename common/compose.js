function compose(...functions) {
  return functions.reduceRight((acc, func) => (...args) => func(acc(...args)));
}

module.exports = compose;

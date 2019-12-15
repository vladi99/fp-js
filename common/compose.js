function compose(...fns) {
  return fns.reduceRight(function reducer(acc, fn) {
    return function composed(...args) {
      return fn(acc(...args));
    }
  })
}

export default compose;


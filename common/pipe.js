function pipe(...fns) {
  return fns.reduce(function reducer(acc, fn) {
    return function composed(...args) {
      return fn(acc(...args));
    }
  })
}

export default pipe;

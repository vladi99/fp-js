function curry(fn, arity = fn.length) {
  return (function nextCurried(prevArgs) {
    return function curried(nextArg) {
      const args = [...prevArgs, nextArg];

      return args.length >= arity ? fn(...args) : nextCurried(args);
    }
  })([])
}

export default curry;

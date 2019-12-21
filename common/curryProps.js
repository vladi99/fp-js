function curryProps(fn, arity = 1) {
  return (function nextCurried(prevArgsObj) {
    return function curried(nextArgObj = {}) {
      const [key] = Object.keys(nextArgObj);
      const args = {
        ...prevArgsObj,
        [key]: nextArgObj[key]
      };

      return Object.keys(args).length >= arity ? fn(args) : nextCurried(args);
    }
  })({})
}

export default curryProps;

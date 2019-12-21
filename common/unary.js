function unary (fn) {
  return function onlyOneArg(arg) {
    return fn(arg);
  }
}

export default unary;

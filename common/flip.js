function flip(fn) {
  return function flipped(first, second, ...rest) {
    return fn(second, first, ...rest);
  };
}

export default flip;

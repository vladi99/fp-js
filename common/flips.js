function flips(func) {
  return function reversedArgs(...args) {
    return func(...[...args].reverse());
  }
}

export default flips;

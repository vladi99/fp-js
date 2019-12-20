function flips(func) {
  return function reversedArgs(...args) {
    // eslint-disable-next-line functional/immutable-data
    return func(...args.reverse());
  }
}

export default flips;

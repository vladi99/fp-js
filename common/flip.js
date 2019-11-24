function flip(func) {
  return (...args) => func(args[1], args[0], ...args.slice(2));
}

module.exports = flip;

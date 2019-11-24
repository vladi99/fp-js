function partial(func, ...args) {
  return func.bind(null, ...args)
}

module.exports = partial;

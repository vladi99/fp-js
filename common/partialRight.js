function partial(fn, ...presetArgs) {
  return function partiallyApplied(...laterArgs) {
    return fn(...laterArgs, ...presetArgs);
  }
}

export default partial;

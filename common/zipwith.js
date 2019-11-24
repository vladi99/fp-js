function zipwith(func, ...arrays) {
  return arrays[0].map((_, index) => func(...arrays.map(arr => arr[index])));
}

module.exports = zipwith;

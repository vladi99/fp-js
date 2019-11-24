function zip(...arrays) {
  return arrays[0].map((_, index) => arrays.map(arr => arr[index]));
}

module.exports = zip;

function zip(...arrays) {
  return arrays.reduce(function reducer(acc, arr) {
    return [...arr].map(function concat(item, index) {
      return [...(acc[index] || []), arr[index]];
    });
  }, []);
}

export default zip;

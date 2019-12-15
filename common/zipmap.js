function zipmap(firstArr, secondArr) {
  return firstArr.reduce(function reducer(accObject, key, index) {
    // eslint-disable-next-line
    accObject[key] = secondArr[index];
    return accObject;
  }, {});
}

export default zipmap;

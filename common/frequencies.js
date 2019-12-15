function frequencies(arr) {
  return [...arr].reduce(function reducer(acc, curr) {
    // eslint-disable-next-line
    acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
    return acc;
  }, {})
}

export default frequencies

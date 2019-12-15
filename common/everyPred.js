function everyPred(...predicates) {
  return function checkEvery(arg) {
    return predicates.every(function check(predicate) {
      return predicate(arg);
    })
  }
}

export default everyPred;

// TODO: make function tail call optimized or change to iterative
function interleave([ x, ...xs ], ...rest) {
  return x === undefined
    ? rest.length === 0
      ? [] // base: no x, no rest
      : interleave (...rest) // inductive: no x, some rest
    : [x, ...interleave(...rest, xs)]
}

export default interleave;

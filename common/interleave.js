import flatten from './flatten';
import zip from './zip';

function interleave(...arr) {
  return flatten(zip(...arr));
}

export default interleave;

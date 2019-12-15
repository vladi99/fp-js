import zip from './zip.js';

function zipwith(fn, ...arrays) {
  return zip(...arrays).map(function applyFn(group) {
    return fn(...group);
  });
}

export default zipwith;


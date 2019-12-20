import zip from './zip';

function zipwith(fn, ...arrays) {
  return zip(...arrays).map(function applyFn(group) {
    return fn(...group);
  });
}

export default zipwith;


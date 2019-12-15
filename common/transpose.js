import zip from './zip.js';

function transpose(arr) {
  return zip(...arr);
}

export default transpose;


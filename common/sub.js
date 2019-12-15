import difference from './difference.js';

function sub(...nums) {
  return nums.reduce(difference);
}

export default sub;

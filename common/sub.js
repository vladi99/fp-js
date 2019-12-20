import difference from './difference';

function sub(...nums) {
  return nums.reduce(difference);
}

export default sub;

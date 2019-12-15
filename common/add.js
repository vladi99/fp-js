import sum from './sum.js';

function add(...nums) {
  return nums.reduce(sum);
}

export default add;

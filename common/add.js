import sum from './sum';

function add(...nums) {
  return nums.reduce(sum);
}

export default add;

export default (...arrays) => arrays[0].map((_, index) => arrays.map(arr => arr[index]));

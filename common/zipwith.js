export default (func, ...arrays) => arrays[0].map((_, index) => func(...arrays.map(arr => arr[index])));

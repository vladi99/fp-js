export default (...arrays) => arrays[0].reduce((acc, _, index) => [...acc, ...arrays.map((array) => array[index])], []);

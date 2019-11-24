// export default function flatten(arr) {
//   return arr.reduce((acc, curr) => acc.concat(Array.isArray(curr) ? flatten(curr) : curr), [])
// };

export default arr => arr.flat(Infinity);

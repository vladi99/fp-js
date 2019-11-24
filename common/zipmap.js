export default (...arrays) => arrays[0].reduce((accObject, key, index) => ({...accObject, [key]: arrays[1][index]}), {});

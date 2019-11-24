export default (func, ...args) => func.bind(null, ...args);

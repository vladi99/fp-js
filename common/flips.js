export default (func) => (...args) => func(...args.slice().reverse());

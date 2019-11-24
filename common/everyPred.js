export default (...funcs) => (arg) => funcs.every(func => func(arg));

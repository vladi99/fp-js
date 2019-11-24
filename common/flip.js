export default (func) => (...args) => func(args[1], args[0], ...args.slice(2));

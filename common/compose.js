export default (...functions) => functions.reduceRight((acc, func) => (...args) => func(acc(...args)));

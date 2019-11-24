console.log('\033[2J');
const equal = require('./test/equal');

const clist = require('./common/clist');
const add = require('./common/add');
const sub = require('./common/sub');
const compose = require('./common/compose');
const double = require('./common/double');
const negate = require('./common/negate');
const zip = require('./common/zip');
const zipmap = require('./common/zipmap');
const zipwith = require('./common/zipwith');
const car = require('./common/car');
const cdr = require('./common/cdr');
const partial = require('./common/partial');
const transpose = require('./common/transpose');
const flip = require('./common/flip');
const flips = require('./common/flips');
const take = require('./common/take');
const range = require('./common/range');
const drop = require('./common/drop');
const flatten = require('./common/flatten');
const interleave = require('./common/interleave');
const everyPred = require('./common/everyPred');
const positive = require('./common/positive');
const even = require('./common/even');
const frequencies = require('./common/frequencies');
const partition = require('./common/partition');
const mergeWith = require('./common/mergeWith');
const treeSeq = require('./common/treeSeq');
const isList = require('./common/isList');
const memoize = require('./common/memoize');
const identity = require('./common/identity');
const isInteger = require('./common/isInteger');
const groupBy = require('./common/groupBy');
const len = require('./common/len');
const update = require('./common/update');
const updateIn = require('./common/updateIn');
const balanced = require('./common/balanced');
const postwalk = require('./common/postwalk');
const prewalk = require('./common/prewalk');
const wrapUnlessZero = require('./common/wrapUnlessZero');

equal(clist(1, 2, 3), [1, 2, 3]);

equal(add(1, 2, 3), 6);

equal(sub(5, 1, 2), 2);

equal(compose(double, negate)(3), -6);

equal(compose(negate, double, add)(1, 2, 3), -12);
equal(compose(clist, double, sub)(1, 2, 3), [-8]);

equal(zip([1, 2, 3], [4, 5, 6]), [[1, 4], [2, 5], [3, 6]]);
equal(zip([1, 2, 3], [4, 5, 6], [7, 8, 9]), [[1, 4, 7], [2, 5, 8], [3, 6, 9]]);

equal(zipmap([1, 2, 3], [4, 5, 6]), { 1: 4, 2: 5, 3: 6 });

equal(zipwith(add, [1, 2, 3], [4, 5, 6]), [5, 7, 9]);
equal(zipwith(add, [1, 2, 3], [4, 5, 6], [1, 1, 1]), [6, 8, 10]);

equal(car(clist(3, 4)), 3);
equal(cdr(clist(3, 4)), [4]);

equal(partial(add, 1, 2)(3, 4), 10);
equal(partial(clist, 1, 2)(3, 4), [1, 2, 3, 4]);
equal(partial(sub, 10)(1, 2), 7);

equal(transpose([[1, 2, 3], [4, 5, 6]]), [[1, 4], [2, 5], [3, 6]]);

equal(flip(clist)(1, 2, 3), [2, 1, 3]);
equal(flip(sub)(10, 1), -9);

equal(flips(clist)(1, 2, 3), [3, 2, 1]);
equal(flips(sub)(1, 2, 3), 0);

equal(take(3, range(10)), [0, 1, 2]);

equal(drop(3, range(6)), [3, 4, 5]);

equal(flatten([1, [2, [3, 4], [5, 6], 7], 8, [9, 10]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

equal(interleave([1, 2, 3], [10, 20, 30]), [1, 10, 2, 20, 3, 30]);
equal(interleave([1, 2, 3], [10, 20, 30], 'abc'), [1, 10, 'a', 2, 20, 'b', 3, 30, 'c']);

equal(everyPred(positive, even)(8), true);
equal(everyPred(positive, even)(7), false);

equal(frequencies('aabcbcac'), { 'a': 3, 'c': 3, 'b': 2 });
equal(frequencies([1, 2, 2, 2]), { 1: 1, 2: 3 });

equal(partition(3, 1, [1, 2, 3, 4, 5]), [[1, 2, 3], [2, 3, 4], [3, 4, 5]]);

equal(mergeWith(add, { 'a': 1, 'b': 2 }, { 'b': 2 }), { 'a': 1, 'b': 4 });
equal(mergeWith(clist, { 'a': 1, 'b': 2 }, { 'b': 2 }), { 'a': 1, 'b': [2, 2] });

const t = [1, [2, [3, 5]]];
equal(treeSeq(isList, identity, t), [[1, [2, [3, 5]]], 1, [2, [3, 5]], 2, [3, 5], 3, 5]);
equal(treeSeq(isInteger, range, 3), [3, 0, 1, 0, 2, 0, 1, 0]);

const newAdd = memoize(add);
equal(newAdd(1, 2, 3), 6);
equal(newAdd(1, 2, 3), 6); // Do not compute add

equal(groupBy(len, ['hi', 'dog', 'me', 'bad', 'good']), { 2: ['hi', 'me'], 3: ['dog', 'bad'], 4: ['good'] });

const bob = { 'name': 'bob', 'hp': 3 };
equal(update(bob, 'hp', add, 2), { 'name': 'bob', 'hp': 5 });
const nohp = { 'name': 'bob' };
equal(update(nohp, 'hp', add, 2), { 'name': 'bob', 'hp': 2 });

const a = { 'a': 1, 'b': { 'c': 2, 'd': { 'e': 3 } } };
equal(updateIn(a, ['b', 'd', 'e'], add, 10), { 'a': 1, 'b': { 'c': 2, 'd': { 'e': 13 } } });
equal(updateIn(a, ['b', 'd', 'f'], add, 10), { 'a': 1, 'b': { 'c': 2, 'd': { 'e': 3, 'f': 10 } } });

equal(balanced('abc(def{g}hi[jk]((()))l)m'), true);
equal(balanced('a(b'), false);
equal(balanced('([)]'), false);

equal(postwalk(wrapUnlessZero, [1, [2, [3]]]), [[0], [[1], [[2]]]]);
equal(prewalk(wrapUnlessZero, [1, [2, [3]]]), [[0], [[[0]], [[[[0]]]]]]);

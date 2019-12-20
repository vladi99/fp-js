import equal from './helpers/equal';

import clist from '../common/clist';
import add from '../common/add';
import sub from '../common/sub';
import compose from '../common/compose';
import double from '../common/double';
import negate from '../common/negate';
import zip from '../common/zip';
import zipmap from '../common/zipmap';
import zipwith from '../common/zipwith';
import first from '../common/first';
import tail from '../common/tail';
import partial from '../common/partial';
import transpose from '../common/transpose';
import flip from '../common/flip';
import flips from '../common/flips';
import take from '../common/take';
import range from '../common/range';
import drop from '../common/drop';
import flatten from '../common/flatten';
import interleave from '../common/interleave';
import everyPred from '../common/everyPred';
import positive from '../common/positive';
import even from '../common/even';
import frequencies from '../common/frequencies';
import partition from '../common/partition';
import mergeWith from '../common/mergeWith';
import treeSeq from '../common/treeSeq';
import isList from '../common/isList';
import memoize from '../common/memoize';
import identity from '../common/identity';
import isInteger from '../common/isInteger';
import groupBy from '../common/groupBy';
import len from '../common/len';
import update from '../common/update';
import updateIn from '../common/updateIn';
import balanced from '../common/balanced';
import postwalk from '../common/postwalk';
import prewalk from '../common/prewalk';
import wrapUnlessZero from '../common/wrapUnlessZero';
import curry from '../common/curry'
import looseCurry from '../common/looseCurry'

function test() {
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

  equal(first(clist(3, 4)), 3);
  equal(tail(clist(3, 4)), [4]);

  equal(partial(add, 1, 2)(3, 4), 10);
  equal(partial(clist, 1, 2)(3, 4), [1, 2, 3, 4]);
  equal(partial(sub, 10)(1, 2), 7);

  equal(curry(add, 4)(1)(2)(3)(4), 10);
  equal(looseCurry(add, 5)(1)(2, 3)(4, 5), 15);

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
}

export default test

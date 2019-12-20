import { strict as assert } from 'assert';

function equal(actual, expected) {
  assert.deepEqual(actual, expected);
  console.log('\x1b[32m%s\x1b[0m', 'Pass');
}

export default equal

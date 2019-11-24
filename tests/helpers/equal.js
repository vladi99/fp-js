import { strict as assert } from 'assert'

export default (actual, expected) => {
  assert.deepEqual(actual, expected);
  console.log('\x1b[32m%s\x1b[0m', 'Pass');
}

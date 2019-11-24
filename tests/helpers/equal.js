import { strict as assert } from 'assert'

export default (actual, expected) => {
  try {
    assert.deepEqual(actual, expected);
    console.log('\x1b[32m%s\x1b[0m', 'Pass');
  } catch (e) {
    console.log('\x1b[31m%s\x1b[0m', 'Fail', e.message);
  }
}

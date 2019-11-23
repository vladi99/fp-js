function equal(actual, expected) {
  if (JSON.stringify(expected) === JSON.stringify(actual)) {
    console.log('\x1b[32m%s\x1b[0m', 'Pass');
  } else {
    console.log('\x1b[31m%s\x1b[0m', `Fail: `, { actual, expected });
  }
}

module.exports = equal;

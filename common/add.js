function add() {
  return [...arguments].reduce((acc, el) => acc + el);
}

module.exports = add;

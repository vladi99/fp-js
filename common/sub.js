function sub() {
  return [...arguments].reduce((acc, el) => acc - el);
}

module.exports = sub;

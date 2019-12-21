function partialProps(fn, presetArgsObj) {
  return function partiallyApplied(laterArgsObj) {
    return fn({ ...presetArgsObj, ...laterArgsObj })
  }
}

export default partialProps

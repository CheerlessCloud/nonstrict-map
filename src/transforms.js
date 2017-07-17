/**
 * @typedef {function(key: any).<(string|number|boolean|NaN)>} inTransformFunction
 */
/**
 * @typedef {function(key: (string|number|boolean)).<any>} outTransformFunction
 */

module.exports = {
  /**
   * @param {any} key
   * @return {(string|number|boolean)}
   */
  in(key) {
    return JSON.stringify(key);
  },
  /**
   * @param {(string|number|boolean)} key
   * @return {any}
   */
  out(key) {
    return JSON.parse(key);
  },
};

// Yes, JSON is not a good format for the keys, but it prototype...
// In future I replace JSON with more compact and quick format.
// ToDo: find good format for keys serializing

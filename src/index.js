const transformsDefault = require('./transforms');

const transforms = Symbol('transforms');

class NonStrictMap extends Map {
  /**
   * @param {Iterable=} iterable
   * @param { in: inTransformFunction, out: outTransformFunction } transforms
   */
  constructor(iterable, customTransforms = {}) {
    super();

    this[transforms] = {
      in: customTransforms.in || transformsDefault.in,
      out: customTransforms.out || transformsDefault.out,
    };

    if (iterable) {
      for (const pair of iterable) {
        this.set(...pair);
      }
    }
  }

  // eslint-disable-next-line class-methods-use-this
  get [Symbol.toStringTag]() {
    return 'NonStrictMap';
  }

  /**
   * @param {(string|object|array|number|null)} key
   * @param {any} value
   * @return {Map}
   */
  set(key, value) {
    return super.set(this[transforms].in(key), value);
  }

  /**
   * @param {(string|object|array|number|null)} key
   * @return {any}
   */
  get(key) {
    return super.get(this[transforms].in(key));
  }

  has(key) {
    return super.has(this[transforms].in(key));
  }

  delete(key) {
    return super.delete(this[transforms].in(key));
  }

  forEach(callback, thisArg) {
    if (typeof callback !== 'function') {
      throw new TypeError('Callback is not a function');
    }

    const fn = (thisArg) ? callback.bind(thisArg) : callback;
    super.forEach((value, key) => fn(value, this[transforms].out(key), this));
  }

  * keys() {
    for (const key of super.keys()) {
      yield this[transforms].out(key);
    }
  }

  * [Symbol.iterator]() {
    for (const pair of super[Symbol.iterator]()) {
      yield [this[transforms].out(pair[0]), pair[1]];
    }
  }

  entries() {
    return this[Symbol.iterator]();
  }
}

module.exports = NonStrictMap;

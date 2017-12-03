# NonStrictMap
Auto serialize and deserialize keys in ES6 Map.

[![Build Status](https://img.shields.io/travis/CheerlessCloud/nonstrict-map.svg?style=flat-square)]()
[![Coverage Status](https://img.shields.io/coveralls/CheerlessCloud/nonstrict-map.svg?style=flat-square)]()
[![node](https://img.shields.io/node/v/nonstrict-map.svg?style=flat-square)]()
[![MIT License](https://img.shields.io/npm/l/nonstrict-map.svg?style=flat-square)]()

[![NPM](https://nodei.co/npm/nonstrict-map.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/nonstrict-map/)

``` js
const map = new NonStrictMap([
  [ { x: 5, y: 6 }, someValue ],
]);

map.get({ x: 5, y: 6 }) === someValue;
```

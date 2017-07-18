# NonStrictMap
Auto serialize and deserialize keys in ES6 Map.

[![Build Status](https://travis-ci.org/TeslaCtroitel/nonstrict-map.svg?branch=master)](https://travis-ci.org/TeslaCtroitel/nonstrict-map)
[![Coverage Status](https://coveralls.io/repos/github/TeslaCtroitel/nonstrict-map/badge.svg?branch=master)](https://coveralls.io/github/TeslaCtroitel/nonstrict-map?branch=master)
[![Node version](https://img.shields.io/badge/node->%206.x-brightgreen.svg)]()
[![MIT License](https://img.shields.io/npm/l/express.svg)]()

[![NPM](https://nodei.co/npm/nonstrict-map.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/nonstrict-map/)

``` js
const map = new NonStrictMap([
  [ { x: 5, y: 6 }, someValue ],
]);

map.get({ x: 5, y: 6 }) === someValue;
```

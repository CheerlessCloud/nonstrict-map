# NonStrictMap
Auto serialize and deserialize keys in ES6 Map.

[![Build Status](https://travis-ci.org/TeslaCtroitel/nonstrict-map.svg?branch=master)](https://travis-ci.org/TeslaCtroitel/nonstrict-map)
[![Coverage Status](https://coveralls.io/repos/github/TeslaCtroitel/nonstrict-map/badge.svg?branch=master)](https://coveralls.io/github/TeslaCtroitel/nonstrict-map?branch=master)
[![node](https://img.shields.io/node/v/nonstrict-map.svg)]()
[![MIT License](https://img.shields.io/npm/l/nonstrict-map.svg)]()

[![NPM](https://nodei.co/npm/nonstrict-map.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/nonstrict-map/)

[![Sponsor](https://app.codesponsor.io/embed/jkPpzosXxwDBBaBNpoqWKCXd/TeslaCtroitel/nonstrict-map.svg)](https://app.codesponsor.io/link/jkPpzosXxwDBBaBNpoqWKCXd/TeslaCtroitel/nonstrict-map)

``` js
const map = new NonStrictMap([
  [ { x: 5, y: 6 }, someValue ],
]);

map.get({ x: 5, y: 6 }) === someValue;
```

const test = require('ava');
const Map = require('./../src/index');

test.beforeEach((t) => {
  // eslint-disable-next-line no-param-reassign
  t.context.map = new Map([
    [{ someKey1: 'someVal1' }, 'mapValue1'],
    [{ someKey2: 'someVal2' }, 'mapValue2'],
    [{ someKey3: 'someVal3' }, 'mapValue3'],
    [{ someKey4: 'someVal4' }, 'mapValue4'],
  ]);
});

test.afterEach((t) => {
  // eslint-disable-next-line no-param-reassign
  delete t.context.map;
});

test.todo('constructor with iterable objects');
/*
  new Map(iterable, {
    in: function(key: any).<(string|number|boolean|NaN)>, // invoke on adding key
    out: function(key: (string|number|boolean|NaN)).<any> // invoke on getting key
  });
*/

test.todo('set method');
test.todo('get method');
test.todo('has method');
test.todo('delete method');
test.todo('forEach method');
test.todo('keys method');
test.todo('values method');
test.todo('entries method');
test.todo('Symbol.iterator');

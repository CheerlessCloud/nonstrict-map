const test = require('ava');
const NSMap = require('./../src/index');

test.beforeEach((t) => {
  // eslint-disable-next-line no-param-reassign
  t.context.map = new NSMap([
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

test('constructor with iterable objects', (t) => {
  t.notThrows(() => {
    // eslint-disable-next-line no-new
    new NSMap([
      [['key1'], 'val1'],
      [{ key: 'val' }, ['val2']],
    ]);
  }, 'constructor must no throws exeptions');
});

test('size getter', (t) => {
  t.true(typeof t.context.map.size === 'number');
});

test('set method', (t) => {
  const { map } = t.context;
  const sizeNow = map.size;
  map.set({ key: 0 }, Math.random());
  t.true(sizeNow + 1 === map.size);
});

test('get method', (t) => {
  const { map } = t.context;
  const value = Math.random();
  map.set({ key: 0 }, value);
  t.is(value, map.get({ key: 0 }));
});

test('has method', (t) => {
  const { map } = t.context;
  map.set({ key: 0 }, Math.random());
  t.true(map.has({ key: 0 }));
});

test('delete method', (t) => {
  const { map } = t.context;
  const lastSize = map.size;
  map.delete({ someKey2: 'someVal2' });
  t.is(lastSize - 1, map.size);
});

test('clear method', (t) => {
  const { map } = t.context;
  const lastSize = map.size;
  map.clear();
  t.true(lastSize > 0 && map.size === 0);
});

test('forEach method', (t) => {
  const { map } = t.context;
  let counter = 0;
  map.forEach(() => { counter += 1; });
  t.is(map.size, counter);
  t.throws(() => map.forEach('uncorrectValue'));
});

test('forEach incorrect callback argument', (t) => {
  const { map } = t.context;
  t.throws(() => map.forEach('non function arg'));
});

test('forEach bind this to callback function', (t) => {
  const { map } = t.context;
  map.forEach(function callback() {
    t.is(this.a, 'b test');
  }, { a: 'b test' });
});

test('keys method', (t) => {
  const { map } = t.context;

  t.true(typeof map.keys().next === 'function');
  t.notThrows(() => {
    // eslint-disable-next-line
    for (const key of map.keys()) { }
  });

  t.is(map.size, [...map.keys()].length);
});

test('values method', (t) => {
  const { map } = t.context;
  t.notThrows(() => {
    // eslint-disable-next-line
    for (const value of map.values()) { }
  });
  t.is(map.size, [...map.values()].length);
});

test('entries method', (t) => {
  t.true(!!t.context.map.entries());
});

test('Symbol.iterator', (t) => {
  t.true(!!t.context.map[Symbol.iterator]);
  t.true(typeof t.context.map[Symbol.iterator]().next === 'function');
  t.notThrows(() => {
    // eslint-disable-next-line
    for (const pair of t.context.map) { }
  });
});

test('toStringTag', (t) => {
  t.is(t.context.map[Symbol.toStringTag], 'NonStrictMap');
});

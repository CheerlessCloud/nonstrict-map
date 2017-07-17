const test = require('ava');
const transforms = require('./../src/transforms');

function testTransform(t, keys, message) {
  for (const key of keys) {
    t.notThrows(() => {
      const outKey = transforms.out(transforms.in(key));
      t.deepEqual(key, outKey, message);
    });
  }
}

test('correct serialize and deserialize object key', (t) => {
  const keys = [
    { x: 5, y: 7 },
    { foo: 'bar' },
  ];

  testTransform(t, keys, 'keys must be equal on simple objects');
});

test('correct serialize and deserialize array key', (t) => {
  const keys = [
    ['foo', 'bar'],
    [['foo'], [5636]],
  ];

  testTransform(t, keys, 'keys must be equal on arrays');
});

test('correct serialize and deserialize primitives keys', (t) => {
  const keys = [
    'foo\u2B20',
    5688123,
    (10 / 3),
    null,
    // NaN // yes, in JSON NaN cast to null. Fix it.
  ];

  testTransform(t, keys, 'keys must be equal on primitives');
});

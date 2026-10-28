const test = require('node:test');
const assert = require('node:assert/strict');
const { greeting } = require('../src/greeting');

test('greeting saluda con el nombre recibido', () => {
  assert.equal(greeting('Jenkins'), 'Hola, Jenkins!!');
});

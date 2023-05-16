const buscarPalabra = require('./buscarPalabra');

test('La función buscarPalabra devuelve true cuando la palabra está en el texto', () => {
  expect(buscarPalabra('Hola mundo', 'mundo')).toBe(true);
});

test('La función buscarPalabra devuelve false cuando la palabra no está en el texto', () => {
  expect(buscarPalabra('Hola mundo', 'adiós')).toBe(false);
});

const sum = require('./sum')

test('somada de dois valores', () => {
    const resultado = sum(2,5)
    expect(resultado).toBe(10)
 })
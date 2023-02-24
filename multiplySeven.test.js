const multiplySeven = require('./multiplySeven');

test('Return the product of seven according to passed argument', () => {
    expect(multiplySeven(7, 14)).toBe(98);
    expect(multiplySeven(10, 10)).toBe(140);
    expect(multiplySeven()).toBe(84);
});

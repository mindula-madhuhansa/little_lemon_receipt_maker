const { default: testRunner } = require("jest-runner");

const index = require("./index");

test('Return discount according to price of lemon bought', () => {
    expect(getDiscount(true, 10)).toBe(
        // some outputs
    );
});

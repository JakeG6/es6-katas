// 55: Number - isInteger
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Number.isInteger()` determines if a value is an integer', function(){
  it('`isInteger` is a static function on `Number`', function() {
    const whatType = 'function';
    assert.equal(typeof Number.isInteger, whatType);
  });
  describe('zero in different ways', function() {
    it('0 is an integer', function() {
      const zero = 0;
      assert(Number.isInteger(zero));
    });
    it('0.000', function() {
      const veryZero = 0.00000;
      assert(Number.isInteger(veryZero));
    });
    it('the string "0" is NOT an integer', function() {
      const stringZero = '0';
      assert(Number.isInteger(stringZero) === false);
    });
  });
  describe('one in different ways', function() {
    it('0.111 + 0.889', function() {
      const rest = 0.889;
      assert(Number.isInteger(0.111 + rest));
    });
    it('0.5 + 0.2 + 0.2 + 0.1 = 1 ... isn`t it?', function() {
      const oneOrNot = 0.5 + 0.2 + 0.2;
      assert(Number.isInteger(oneOrNot) === false);
    });
    it('parseInt`ed "1" is an integer', function() {
      const convertedToInt = Number.parseInt('1.01');
      assert(Number.isInteger(convertedToInt));
    });
  });
  describe('what is not an integer', function() {
    it('`Number()` is an integer', function() {
      const numberOne = Number();
      assert(Number.isInteger(numberOne));
    });
    it('`{}` is NOT an integer', function() {
      const isit = Number.isInteger({});
      assert(isit === false);
    });
    it('`0.1` is not an integer', function() {
      const isit = Number.isInteger(0.1);
      assert(isit === false);
    });
    it('`Number.Infinity` is not an integer', function() {
      const isit = Number.isInteger(Number.infinity);
      assert(isit === false);
    });
    it('`NaN` is not an integer', function() {
      const isit = Number.isInteger(NaN);
      assert(isit === false);
    });
  });
});
const { toEngineering, acosh, asinh, atanh, cosh, sinh, tanh, copysign } = require('./variant7.js');

describe('Library Functions', () => {
  describe('toEngineering', () => {
    test('should format number in engineering notation', () => {
      expect(toEngineering(123456, 3)).toBe('123e+3');
      expect(toEngineering(0.00123, 2)).toBe('1.2e-3');
      expect(toEngineering(-123, 2)).toBe('-120e+0');
    });

    test('should handle invalid inputs', () => {
      expect(toEngineering(NaN)).toBe('NaN');
      expect(toEngineering(Infinity)).toBe('Infinity');
      expect(toEngineering(-Infinity)).toBe('-Infinity');
    });
  });

  describe('acosh', () => {
    test('should calculate hyperbolic arccos', () => {
      expect(acosh(1)).toBeCloseTo(0);
      expect(acosh(10)).toBeCloseTo(2.993, 3);
    });
  });

  describe('asinh', () => {
    test('should calculate hyperbolic arcsin', () => {
      expect(asinh(0)).toBe(0);
      expect(asinh(10)).toBeCloseTo(2.998, 3);
    });
  });

  describe('atanh', () => {
    test('should calculate hyperbolic arctan', () => {
      expect(atanh(0)).toBe(0);
      expect(atanh(0.5)).toBeCloseTo(0.549, 3);
    });
  });

  describe('cosh', () => {
    test('should calculate hyperbolic cosine', () => {
      expect(cosh(0)).toBe(1);
      expect(cosh(2)).toBeCloseTo(3.762, 3);
    });
  });

  describe('sinh', () => {
    test('should calculate hyperbolic sine', () => {
      expect(sinh(0)).toBe(0);
      expect(sinh(2)).toBeCloseTo(3.627, 3);
    });
  });

  describe('tanh', () => {
    test('should calculate hyperbolic tangent', () => {
      expect(tanh(0)).toBe(0);
      expect(tanh(2)).toBeCloseTo(0.964, 3);
    });
  });

  describe('copysign', () => {
    test('should return a value with the magnitude of x and the sign of y', () => {
      expect(copysign(5, -3)).toBe(-5);
      expect(copysign(-5, 3)).toBe(5);
      expect(copysign(0, -3)).toBe(-0);
    });
  });
});

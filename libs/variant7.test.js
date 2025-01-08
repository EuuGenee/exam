import { toEngineering, acosh, asinh, atanh, cosh, sinh, tanh, copysign } from './variant7';
import { splitNumber } from './variant5'; // Імпортуємо для перевірки поведінки `toEngineering`

describe('toEngineering', () => {
  test('перетворення числа у формат інженерної нотації без precision', () => {
    expect(toEngineering(123456)).toBe('123.456e+3');
    expect(toEngineering(0.00123)).toBe('1.23e-3');
    expect(toEngineering(-1000000)).toBe('-1e+6');
  });

  test('перетворення числа у формат інженерної нотації з precision', () => {
    expect(toEngineering(123456, 3)).toBe('123e+6');
    expect(toEngineering(0.001234567, 5)).toBe('123.46e-3');
  });

  test('обробка некоректних значень', () => {
    expect(toEngineering(NaN)).toBe('NaN');
    expect(toEngineering(Infinity)).toBe('Infinity');
    expect(toEngineering(-Infinity)).toBe('-Infinity');
  });
});

describe('Гіперболічні функції', () => {
  test('acosh', () => {
    expect(acosh(1)).toBe(0);
    expect(acosh(10)).toBeCloseTo(2.993, 3);
  });

  test('asinh', () => {
    expect(asinh(0)).toBe(0);
    expect(asinh(10)).toBeCloseTo(2.998, 3);
  });

  test('atanh', () => {
    expect(atanh(0)).toBe(0);
    expect(atanh(0.5)).toBeCloseTo(0.549, 3);
  });
});

describe('cosh', () => {
  test('обчислення cosh', () => {
    expect(cosh(0)).toBe(1);
    expect(cosh(2)).toBeCloseTo(3.762, 3);
  });
});

describe('sinh', () => {
  test('обчислення sinh', () => {
    expect(sinh(0)).toBe(0);
    expect(sinh(2)).toBeCloseTo(3.627, 3);
  });
});

describe('tanh', () => {
  test('обчислення tanh', () => {
    expect(tanh(0)).toBe(0);
    expect(tanh(2)).toBeCloseTo(0.964, 3);
  });
});

describe('copysign', () => {
  test('повернення значення x з знаком y', () => {
    expect(copysign(10, -1)).toBe(-10);
    expect(copysign(-5, 1)).toBe(5);
    expect(copysign(0, -1)).toBe(-0);
  });
});



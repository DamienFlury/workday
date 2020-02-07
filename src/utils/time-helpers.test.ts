import { formatPercentage, formatDistanceCustom } from './time-helpers';

describe('format percentage works', () => {
  it('calculates 50 of 100 as 50%', () => {
    const percentage = formatPercentage(100, 50);
    expect(percentage).toBe(50);
  });
  it('calculates 50 of 200 as 25%', () => {
    const percentage = formatPercentage(200, 50);
    expect(percentage).toBe(25);
  });
  it('works with decimals', () => {
    const percentage = formatPercentage(123214, 7847);
    expect(percentage).toBeCloseTo(6.368);
  });
  it('delimits at 0', () => {
    const percentage = formatPercentage(-10, 10);
    expect(percentage).toBe(0);
  });
  it('delimits at 100', () => {
    const percentage = formatPercentage(10, 11);
    expect(percentage).toBe(100);
  });
});

describe('format distance custom works', () => {
  it('works with hours only', () => {
    const first = new Date(0, 0, 0, 10);
    const second = new Date(0, 0, 0, 14);

    const result = formatDistanceCustom(first, second);
    expect(result).toBe('4 hours');
  });
  it('works with minutes only', () => {
    const first = new Date(0, 0, 0, 0, 20);
    const second = new Date(0, 0, 0, 0, 42);

    const result = formatDistanceCustom(first, second);
    expect(result).toBe('22 minutes');
  });
  it('works with hours and minutes', () => {
    const first = new Date(0, 0, 0, 2, 14);
    const second = new Date(0, 0, 0, 5, 39);

    const result = formatDistanceCustom(first, second);
    expect(result).toBe('3 hours and 25 minutes');
  });
  it('works with hours and minutes reversed', () => {
    const first = new Date(0, 0, 0, 2, 14);
    const second = new Date(0, 0, 0, 5, 39);

    const result = formatDistanceCustom(second, first);
    expect(result).toBe('3 hours and 25 minutes');
  });
  it('works with hours and minutes with earlier seconds > later seconds', () => {
    const first = new Date(0, 0, 0, 2, 25);
    const second = new Date(0, 0, 0, 5, 14);

    const result = formatDistanceCustom(first, second);
    expect(result).toBe('2 hours and 49 minutes');
  });
});

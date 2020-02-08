import { formatPercentage, formatDistanceCustom, formatDistanceWithPrefix } from './time-helpers';

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
  it('works with hours and minutes with earlier minutes > later minutes', () => {
    const first = new Date(0, 0, 0, 2, 25);
    const second = new Date(0, 0, 0, 5, 14);

    const result = formatDistanceCustom(first, second);
    expect(result).toBe('2 hours and 49 minutes');
  });
  it('ignores seconds', () => {
    const first = new Date(0, 0, 0, 1, 32, 10);
    const second = new Date(0, 0, 0, 4, 44, 59);

    const result = formatDistanceCustom(first, second);
    expect(result).toBe('3 hours and 12 minutes');
  });
});

describe('format distance with prefix works', () => {
  it('works for future', () => {
    const first = new Date(0, 0, 0, 2, 23);
    const second = new Date(0, 0, 0, 3, 33);

    const result = formatDistanceWithPrefix(first, second, true);
    expect(result).toBe('is in 1 hour and 10 minutes');
  });
  it('works for past', () => {
    const first = new Date(0, 0, 0, 3, 56);
    const second = new Date(0, 0, 0, 4, 12);

    const result = formatDistanceWithPrefix(second, first, true);
    expect(result).toBe('was 16 minutes ago');
  });
  it('works without predicate', () => {
    const first = new Date(0, 0, 0, 0, 1);
    const second = new Date(0, 0, 0, 0, 2);

    const result = formatDistanceWithPrefix(first, second);
    expect(result).toBe('in 1 minute');
  });
});

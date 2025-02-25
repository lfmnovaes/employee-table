import { describe, it, expect } from 'vitest';
import { formatDate, formatPhone } from '../formatters';

describe('formatDate', () => {
  it('should format date correctly in DD/MM/YYYY format', () => {
    expect(formatDate('2023-05-30T00:00:00.000Z')).toBe('30/05/2023');
  });

  it('should handle invalid date format', () => {
    expect(formatDate('2023/13/13')).toBe('--');
  });

  it('should handle empty date', () => {
    expect(formatDate('')).toBe('--');
  });
});

describe('formatPhone', () => {
  it('should format phone number correctly with country code', () => {
    expect(formatPhone('5521234567890')).toBe('+55 (21) 23456-7890');
  });

  it('should handle invalid phone number format', () => {
    expect(formatPhone('123456790')).toBe('--');
  });

  it('should handle empty phone number', () => {
    expect(formatPhone('')).toBe('--');
  });
});

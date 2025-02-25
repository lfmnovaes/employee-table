import { describe, it, expect } from 'vitest';
import { formatDate, formatPhone } from '../formatters';

describe('formatDate', () => {
  it('should format date correctly in DD/MM/YYYY format', () => {
    const date = '2023-05-30T00:00:00.000Z';
    expect(formatDate(date)).toBe('30/05/2023');
  });

  it('should handle empty date', () => {
    expect(formatDate('')).toBe('No date available');
  });
});

describe('formatPhone', () => {
  it('should format phone number correctly with country code', () => {
    const phone = '5521234567890';
    expect(formatPhone(phone)).toBe('+55 (21) 23456-7890');
  });

  it('should handle empty phone number', () => {
    expect(formatPhone('')).toBe('No phone available');
  });
});

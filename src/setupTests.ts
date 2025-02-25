import '@testing-library/jest-dom';
import { expect, afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';
import React from 'react';

expect.extend(matchers);

afterEach(() => {
  cleanup();
});

// Mock SVG imports
vi.mock('@/assets/charm_chevron-up.svg?react', () => ({
  default: () => React.createElement('div', { 'data-testid': 'mocked-chevron-icon' }),
}));

import '@testing-library/jest-dom';
import { expect, afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';
import React from 'react';

expect.extend(matchers);

afterEach(() => {
  cleanup();
});

interface SVGProps {
  className?: string;
  'aria-hidden'?: boolean;
  'aria-label'?: string;
  [key: string]: string | boolean | undefined;
}

// Mock SVG imports
vi.mock('@/assets/chevron-up_icon.svg?react', () => ({
  default: () => React.createElement('div', { 'data-testid': 'mocked-chevron-icon' }),
}));

vi.mock('@/assets/BeTalent_logo.svg?react', () => ({
  default: (props: SVGProps) =>
    React.createElement('div', {
      'data-testid': 'mocked-betalent-logo',
      'aria-label': props['aria-label'] || 'BeTalent Logo',
      className: props.className,
    }),
}));

vi.mock('@/assets/search_icon.svg?react', () => ({
  default: (props: SVGProps) =>
    React.createElement('div', {
      'data-testid': 'mocked-search-icon',
      'aria-hidden': props['aria-hidden'] || false,
      className: props.className,
    }),
}));

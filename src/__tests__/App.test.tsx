import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import App from '@/App';

describe('App', () => {
  it('should render the App component', () => {
    render(<App />);

    const title = screen.getByText('Funcionários');
    expect(title).toBeInTheDocument();

    const searchInput = screen.getByPlaceholderText('Pesquisar');
    expect(searchInput).toBeInTheDocument();
  });

  it('should make search input container full width on mobile', () => {
    render(<App />);

    const searchInput = screen.getByPlaceholderText('Pesquisar');

    const searchContainer = searchInput.closest('div')?.parentElement;
    expect(searchContainer).toHaveClass('w-full');
    expect(searchContainer).toHaveClass('md:w-auto');
  });
});

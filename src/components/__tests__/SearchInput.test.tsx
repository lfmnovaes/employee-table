import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import SearchInput from '@/components/SearchInput';

describe('SearchInput', () => {
  it('should render the search input with default placeholder', () => {
    const mockOnSearch = vi.fn();
    render(<SearchInput onSearch={mockOnSearch} />);

    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();

    const inputElement = screen.getByPlaceholderText('Pesquisar');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveClass('bg-white');
    expect(inputElement).toHaveClass('h-12');
  });

  it('should render with custom placeholder', () => {
    const mockOnSearch = vi.fn();
    render(<SearchInput onSearch={mockOnSearch} placeholder="Custom placeholder" />);

    const inputElement = screen.getByPlaceholderText('Custom placeholder');
    expect(inputElement).toBeInTheDocument();
  });

  it('should call onSearch when input value changes', () => {
    const mockOnSearch = vi.fn();
    render(<SearchInput onSearch={mockOnSearch} />);

    const inputElement = screen.getByPlaceholderText('Pesquisar');
    fireEvent.change(inputElement, { target: { value: 'test query' } });

    expect(mockOnSearch).toHaveBeenCalledWith('test query');
  });

  it('should cover full width on mobile screens', () => {
    const mockOnSearch = vi.fn();
    render(<SearchInput onSearch={mockOnSearch} />);

    const inputElement = screen.getByPlaceholderText('Pesquisar');
    expect(inputElement).toHaveClass('w-full');

    // The input should have responsive classes for different screen sizes
    // On mobile (default), it should be full width
    // On medium screens and up, it should have a fixed width
    expect(inputElement).toHaveClass('md:w-72');

    // Verify the container has no padding that would prevent full width
    const container = screen.getByTestId('search-input');
    expect(container).not.toHaveClass('px-4');
    expect(container).not.toHaveClass('px-2');
  });
});

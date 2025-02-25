import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Navbar from '@/components/Navbar';

describe('Navbar', () => {
  it('should render the navbar with BeTalent logo', () => {
    render(<Navbar />);

    const navbar = screen.getByTestId('navbar');
    expect(navbar).toBeInTheDocument();
    expect(navbar).toHaveClass('bg-white');
    expect(navbar).toHaveClass('shadow-md');

    const logo = screen.getByLabelText('BeTalent Logo');
    expect(logo).toBeInTheDocument();
  });
});

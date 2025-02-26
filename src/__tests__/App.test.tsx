import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

import App from '@/App';
import employeeService from '@/services/employeeService';
import { mockEmployee } from '@/components/__tests__/mockData';
import { ErrorMessages } from '@/constants/errorMessages';

vi.mock('@/services/employeeService', () => ({
  default: {
    getEmployees: vi.fn(),
  },
}));

vi.mock('react', async () => {
  const actual = await vi.importActual('react');
  return {
    ...actual,
    Suspense: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('App', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render the App component with title and search', async () => {
    vi.mocked(employeeService.getEmployees).mockResolvedValue({
      data: [mockEmployee],
      error: null,
      success: true,
    });

    render(<App />);

    await waitFor(() => {
      const title = screen.getByText('Funcionários');
      expect(title).toBeInTheDocument();

      const searchInput = screen.getByPlaceholderText('Pesquisar');
      expect(searchInput).toBeInTheDocument();
    });
  });

  it('should make search input container full width on mobile', async () => {
    vi.mocked(employeeService.getEmployees).mockResolvedValue({
      data: [mockEmployee],
      error: null,
      success: true,
    });

    render(<App />);

    await waitFor(() => {
      expect(employeeService.getEmployees).toHaveBeenCalled();
    });

    const searchInput = screen.getByPlaceholderText('Pesquisar');
    const searchContainer = searchInput.closest('div')?.parentElement;
    expect(searchContainer).toHaveClass('w-full');
    expect(searchContainer).toHaveClass('md:w-auto');
  });

  it('should render the App component with data from API', async () => {
    vi.mocked(employeeService.getEmployees).mockResolvedValue({
      data: [mockEmployee],
      error: null,
      success: true,
    });

    render(<App />);

    await waitFor(() => {
      const nameElements = screen.getAllByText(mockEmployee.name);
      expect(nameElements.length).toBeGreaterThan(0);
    });
  });

  it('should show error message when service is not running', async () => {
    vi.mocked(employeeService.getEmployees).mockResolvedValue({
      data: null,
      error: ErrorMessages.GENERIC_ERROR,
      success: false,
    });

    render(<App />);

    await waitFor(() => {
      expect(screen.getByText(ErrorMessages.GENERIC_ERROR)).toBeInTheDocument();
    });
  });

  it('should show error message for invalid data', async () => {
    vi.mocked(employeeService.getEmployees).mockResolvedValue({
      data: null,
      error: ErrorMessages.GENERIC_ERROR,
      success: false,
    });

    render(<App />);

    await waitFor(() => {
      expect(screen.getByText(ErrorMessages.GENERIC_ERROR)).toBeInTheDocument();
    });
  });
});

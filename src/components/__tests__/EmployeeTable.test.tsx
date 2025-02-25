import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import EmployeeTable from '../EmployeeTable';
import { mockEmployee } from './mockData';

describe('EmployeeTable', () => {
  it('should render the table with headers', () => {
    render(<EmployeeTable employees={[mockEmployee]} />);
    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Job')).toBeInTheDocument();
    expect(screen.getByText('Admission Date')).toBeInTheDocument();
    expect(screen.getByText('Phone')).toBeInTheDocument();
  });

  it('should render employee data correctly', () => {
    render(<EmployeeTable employees={[mockEmployee]} />);
    expect(screen.getByText(mockEmployee.name)).toBeInTheDocument();
    expect(screen.getByText(mockEmployee.job)).toBeInTheDocument();
    expect(screen.getByText('+55 (21) 23456-7890')).toBeInTheDocument();
  });

  it('should show image placeholder for empty fields', () => {
    render(<EmployeeTable employees={[mockEmployee]} />);
    expect(screen.getByText('X')).toBeInTheDocument();
  });
});

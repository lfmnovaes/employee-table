import { render, screen, fireEvent, within } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import EmployeeTable from '@/components/EmployeeTable';
import { mockEmployee } from './mockData';
import { EmployeeTableNames } from '@/enums/EmployeeTableNames.enum';

describe('EmployeeTable Desktop', () => {
  it('should render the table with headers in desktop view', () => {
    render(<EmployeeTable employees={[mockEmployee]} />);
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
    expect(table).toHaveClass('hidden', 'md:table');

    const headers = within(table).getAllByRole('columnheader');
    expect(headers[0]).toHaveTextContent(EmployeeTableNames.FOTO);
    expect(headers[1]).toHaveTextContent(EmployeeTableNames.NOME);
    expect(headers[2]).toHaveTextContent(EmployeeTableNames.CARGO);
    expect(headers[3]).toHaveTextContent(EmployeeTableNames.DATA_DE_ADMISSAO);
    expect(headers[4]).toHaveTextContent(EmployeeTableNames.TELEFONE);
  });

  it('should render employee data correctly in desktop view', () => {
    render(<EmployeeTable employees={[mockEmployee]} />);
    const table = screen.getByRole('table');
    const rows = within(table).getAllByRole('row');
    const dataRow = rows[1];
    const cells = within(dataRow).getAllByRole('cell');
    expect(cells[1]).toHaveTextContent(mockEmployee.name);
    expect(cells[2]).toHaveTextContent(mockEmployee.job);
    expect(cells[4]).toHaveTextContent('+55 (21) 23456-7890');
  });
});

describe('EmployeeTable Mobile', () => {
  it('should render employee card in mobile view', () => {
    render(<EmployeeTable employees={[mockEmployee]} />);
    const mobileContainer = screen.getByTestId('mobile-container');
    expect(mobileContainer).toHaveClass('md:hidden');
    const headerDot = within(mobileContainer).getByRole('banner', { hidden: true });
    expect(headerDot).toBeInTheDocument();
  });

  it('should show/hide details when clicking on mobile card', () => {
    render(<EmployeeTable employees={[mockEmployee]} />);
    const mobileContainer = screen.getByTestId('mobile-container');

    const detailsContainer = screen.getByTestId('mobile-details');
    expect(detailsContainer).toHaveClass('max-h-0');

    const card = within(mobileContainer).getByText(mockEmployee.name).closest('div');
    if (card) fireEvent.click(card);

    expect(detailsContainer).toHaveClass('max-h-40');
    expect(within(detailsContainer).getByText(EmployeeTableNames.CARGO)).toBeInTheDocument();
    expect(within(detailsContainer).getByText(mockEmployee.job)).toBeInTheDocument();
    expect(within(detailsContainer).getByText('+55 (21) 23456-7890')).toBeInTheDocument();

    const dottedLines = within(detailsContainer).getAllByRole('separator', { hidden: true });
    expect(dottedLines.length).toBeGreaterThan(0);
    expect(dottedLines[0]).toHaveClass('border-dotted');

    if (card) fireEvent.click(card);
    expect(detailsContainer).toHaveClass('max-h-0');
  });

  it('should show placeholder for empty fields', () => {
    render(<EmployeeTable employees={[mockEmployee]} />);
    const placeholders = screen.getAllByText('X');
    expect(placeholders.length).toBeGreaterThan(0);
    expect(placeholders[0]).toBeInTheDocument();
  });
});

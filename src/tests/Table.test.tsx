import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Table from '../components/Table';

describe('Table Component', () => {
  const mockOnRowClick = jest.fn();
  const mockPositions = [
    { asset: 'BTC', quantity: 2, value: 40000 },
    { asset: 'AAPL', quantity: 10, value: 1500 },
    { asset: 'TSLA', quantity: 5, value: 5000 },
  ];

  test('renders the table with positions', () => {
    render(
      <Table positions={mockPositions} onRowClick={mockOnRowClick} />
    );

    expect(screen.getByText('Asset')).toBeInTheDocument();
    expect(screen.getByText('Quantity')).toBeInTheDocument();
    expect(screen.getByText('Value')).toBeInTheDocument();

    expect(screen.getByText('BTC')).toBeInTheDocument();
    expect(screen.getByText('AAPL')).toBeInTheDocument();
    expect(screen.getByText('TSLA')).toBeInTheDocument();

    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();

    expect(screen.getByText('40000')).toBeInTheDocument();
    expect(screen.getByText('1500')).toBeInTheDocument();
    expect(screen.getByText('5000')).toBeInTheDocument();
  });

  test('calls onRowClick when a row is clicked', () => {
    render(
      <Table positions={mockPositions} onRowClick={mockOnRowClick} />
    );

    const firstRow = screen.getByText('BTC').closest('tr');
    fireEvent.click(firstRow!);

    expect(mockOnRowClick).toHaveBeenCalledTimes(1);
    expect(mockOnRowClick).toHaveBeenCalledWith(mockPositions[0]);

    const secondRow = screen.getByText('AAPL').closest('tr');
    fireEvent.click(secondRow!);

    expect(mockOnRowClick).toHaveBeenCalledWith(mockPositions[1]);
  });
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import History from '../components/History';

describe('History Component', () => {
  const mockSetTimeRange = jest.fn();
  const mockData = [
    { date: '2023-01-01', value: 1000 },
    { date: '2023-06-01', value: 1200 },
    { date: '2023-12-01', value: 1400 },
  ];

  test('renders the History component with data and time range selector', () => {
    render(
      <History 
        data={mockData}
        timeRange="1Y"
        setTimeRange={mockSetTimeRange}
      />
    );

    expect(screen.getByText('Portfolio Performance')).toBeInTheDocument();

    const timeRangeSelect = screen.getByDisplayValue('1 Year');
    expect(timeRangeSelect).toBeInTheDocument();

    expect(screen.getByText('2023-01-01')).toBeInTheDocument();
    expect(screen.getByText('2023-12-01')).toBeInTheDocument();
  });

  test('changes the time range when a new option is selected', () => {
    render(
      <History 
        data={mockData}
        timeRange="1Y"
        setTimeRange={mockSetTimeRange}
      />
    );

    const timeRangeSelect = screen.getByDisplayValue('1 Year');
    fireEvent.change(timeRangeSelect, { target: { value: '6M' } });

    expect(mockSetTimeRange).toHaveBeenCalledWith('6M');
  });

  test('renders the LineChart and lines correctly', () => {
    render(
      <History 
        data={mockData}
        timeRange="1Y"
        setTimeRange={mockSetTimeRange}
      />
    );

    const chart = screen.getByRole('figure');
    expect(chart).toBeInTheDocument();

    expect(screen.getByText('1400')).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { PieChart, Pie, Cell } from 'recharts';
import DonutChart from '../components/DonutChart';

describe('DonutChart Component', () => {
  const mockSetSelectedAsset = jest.fn();
  const mockData = [
    { name: 'BTC', value: 4000 },
    { name: 'AAPL', value: 3000 },
    { name: 'TSLA', value: 2000 },
    { name: 'ETH', value: 1000 }
  ];

  test('renders the DonutChart component with data', () => {
    render(
      <DonutChart
        data={mockData}
        selectedAsset="BTC"
        setSelectedAsset={mockSetSelectedAsset}
      />
    );

    expect(screen.getByText('Portfolio Balance')).toBeInTheDocument();

    expect(screen.getByText('BTC')).toBeInTheDocument();
    expect(screen.getByText('AAPL')).toBeInTheDocument();
    expect(screen.getByText('TSLA')).toBeInTheDocument();
    expect(screen.getByText('ETH')).toBeInTheDocument();
  });

  test('calls setSelectedAsset when an asset is clicked', () => {
    render(
      <DonutChart
        data={mockData}
        selectedAsset="BTC"
        setSelectedAsset={mockSetSelectedAsset}
      />
    );

    const pieSlice = screen.getByText('BTC');
    fireEvent.click(pieSlice);

    expect(mockSetSelectedAsset).toHaveBeenCalledTimes(1);
    expect(mockSetSelectedAsset).toHaveBeenCalledWith('BTC');
  });

  test('renders PieChart and Cells correctly', () => {
    render(
      <DonutChart
        data={mockData}
        selectedAsset="BTC"
        setSelectedAsset={mockSetSelectedAsset}
      />
    );

    expect(screen.getByRole('figure')).toBeInTheDocument();

    const pieCells = screen.getAllByRole('cell');
    expect(pieCells).toHaveLength(mockData.length);
  });
});

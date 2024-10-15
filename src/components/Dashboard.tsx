import React, { useEffect, useState } from 'react';
import Table from './Table';
import DonutChart from './DonutChart';
import History from './History';
import ToggleSwitch from './ToggleSwitch';

interface Position {
  asset: string;
  quantity: number;
  value: number;
}

const Dashboard: React.FC = () => {
  const [positions, setPositions] = useState<Position[]>([]);
  const [assets, setAssets] = useState<[]>([]);
  const [checked, setChecked] = useState(false);
  const [portfolio, setPortfolio] = useState([]);
  const [selectedPosition, setSelectedPosition] = useState<Position | null>(null);
  const [timeRange, setTimeRange] = useState('1Y');

  const getAssets = async () => {
    const response = await fetch('http://localhost:8000/api/assets', {
      method: "GET",
      headers: { "Accept": "application/json", 'Access-Control-Allow-Origin': '*' }
  });
    const assets = await response.json(); 
    console.log('assests', assets)
    setAssets(assets);
  };

  const getPortfolio = async () => {
    const response = await fetch('http://localhost:8000/api/portfolios', {
      method: "GET",
      headers: { "Accept": "application/json", 'Access-Control-Allow-Origin': '*' }
  });
    const portfolio = await response.json(); 
    console.log('portfolio', portfolio)
    setPortfolio(portfolio);
  };

  useEffect(() => {
    getAssets();
    getPortfolio();
  }, []);

  const handleRowClick = (position: Position) => {
    setSelectedPosition(position);
    console.log('Selected position:', position);
  };

  const handleChangeView = (newValue: boolean) => {
    setChecked(newValue);
  }

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <ToggleSwitch checked={checked} onChange={handleChangeView} />
      {!checked ? (
      <div className="chart-container">
        <DonutChart data={assets} setSelectedAsset={()=>{}} selectedAsset={''} />
      </div>) : (
        <div className="table-container">
        <Table positions={assets} onRowClick={handleRowClick} />
        </div>
      )}
      <div className="chart-container">
        <History data={assets} timeRange={timeRange} setTimeRange={setTimeRange} />
      </div>
      {selectedPosition && (
        <div className="selected-position">
          <h2>Selected Position Details</h2>
          <p>Asset: {selectedPosition.asset}</p>
          <p>Quantity: {selectedPosition.quantity}</p>
          <p>Value: {selectedPosition.value}</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;


import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface Props {
  data: any[];
  timeRange: string;
  setTimeRange: (range: string) => void;
}

const History: React.FC<Props> = ({ data, timeRange, setTimeRange }) => {
  return (
    <div>
      <h2 className="text-xl mb-4">Portfolio Performance</h2>
      <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid stroke="#eee" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
      <select value={timeRange} onChange={(e) => setTimeRange(e.target.value)}>
        <option value="1Y">1 Year</option>
        <option value="6M">6 Months</option>
        <option value="3M">3 Months</option>
      </select>
    </div>
  );
};

export default History;

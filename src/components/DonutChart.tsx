import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface Props {
  data: any[];
  selectedAsset: string;
  setSelectedAsset: (asset: string) => void;
}

const DonutChart: React.FC<Props> = ({ data, selectedAsset, setSelectedAsset }) => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="mb-8">
      <h2 className="text-xl mb-4">Portfolio Balance</h2>
      <ResponsiveContainer width="100%" height={400}>
      <PieChart width={400} height={400}>
        <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            label={true}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DonutChart;

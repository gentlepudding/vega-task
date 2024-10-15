import React from 'react';

interface Position {
    asset: string;
    quantity: number;
    value: number;
  }
  
  interface Props {
    positions: Position[];
    onRowClick: (position: Position) => void;
  }
  const Table: React.FC<Props> = ({ positions, onRowClick }) => {
    return (
      <table>
        <thead>
          <tr>
            <th>Asset</th>
            <th>Quantity</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {positions.map((position, index) => (
            <tr key={index} onClick={() => onRowClick(position)}>
              <td>{position.asset}</td>
              <td>{position.quantity}</td>
              <td>{position.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

export default Table;

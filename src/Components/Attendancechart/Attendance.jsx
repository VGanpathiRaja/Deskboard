import React from 'react';
import styled from 'styled-components';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Linchart = styled.div`
  padding: 6px;
  margin: 5px;
  border: 1px solid #2f6896;
  height: 250px; 
`;

const Heading = styled.h1`
  font-size: 16px;
  padding: 10px 0;
  color: #2f6896;
`;

const data = [
  {
    name: '1/7',
    Weeks: 2400,
    amt: 0,
  },
  {
    name: '8/7',
    Weeks: 1398,
    amt: 2210,
  },
  {
    name: '15/7',
    Weeks: 9800,
    amt: 2290,
  },
  {
    name: '22/7',
    Weeks: 3908,
    amt: 2000,
  },
  {
    name: '29/7',
    Weeks: 4800,
    amt: 2181,
  },
  {
    name: '5/8',
    Weeks: 3800,
    amt: 2500,
  },
  {
    name: '12/8',
    Weeks: 4300,
    amt: 2100,
  },
];


const CustomizedLabel = ({ x, y, stroke, value }) => {
  return (
    <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
      {value}
    </text>
  );
};


const CustomizedAxisTick = ({ x, y, payload }) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">
        {payload.value}
      </text>
    </g>
  );
};

function Attendance() {
  return (
    <Linchart>
      <Heading>Student's Attendance</Heading>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Weeks" stroke="#8884d8" label={<CustomizedLabel />} />
        </LineChart>
      </ResponsiveContainer>
    </Linchart>
  );
}

export default Attendance;

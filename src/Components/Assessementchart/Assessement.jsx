import React from 'react';
import styled from 'styled-components';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Barchart = styled.div`
    padding: 6px;
    margin: 5px;
    border: 1px solid #2f6896;
    height: 250px;
`;
const Heading = styled.h1`
    font-size: 16px;
    padding: 10px 0;
    color:#2f6896;
`;
const data = [
    {
      date: '2000-01',
      Completed: 4000,
      Pending: 2400,
      amt: 2400,
    },
    {
      date: '2000-02',
      Completed: 3000,
      Pending: 1398,
      amt: 2210,
    },
    {
      date: '2000-03',
      Completed: 2000,
      Pending: 9800,
      amt: 2290,
    },
    {
      date: '2000-04',
      Completed: 2780,
      Pending: 3908,
      amt: 2000,
    },
    {
      date: '2000-05',
      Completed: 1890,
      Pending: 4800,
      amt: 2181,
    },
    {
      date: '2000-06',
      Completed: 2390,
      Pending: 3800,
      amt: 2500,
    },
    {
      date: '2000-07',
      Completed: 3490,
      Pending: 4300,
      amt: 2100,
    },
    {
      date: '2000-08',
      Completed: 4000,
      Pending: 2400,
      amt: 2400,
    },
    {
      date: '2000-09',
      Completed: 3000,
      Pending: 1398,
      amt: 2210,
    },
    {
      date: '2000-10',
      Completed: 2000,
      Pending: 9800,
      amt: 2290,
    },
    {
      date: '2000-11',
      Completed: 2780,
      Pending: 3908,
      amt: 2000,
    },
    {
      date: '2000-12',
      Completed: 1890,
      Pending: 800,
      amt: 2181,
    },
  ];
  
  const monthTickFormatter = (tick) => {
    const date = new Date(tick);
  
    return date.getMonth() + 1;
  };
  
  const renderQuarterTick = (tickProps) => {
    const { x, y, payload } = tickProps;
    const { value, offset } = payload;
    const date = new Date(value);
    const month = date.getMonth();
    const quarterNo = Math.floor(month / 3) + 1;
    const isMidMonth = month % 3 === 1;
  
    if (month % 3 === 1) {
      return <text x={x} y={y - 4} textAnchor="middle">{`Q${quarterNo}`}</text>;
    }
  
    const isLast = month === 11;
  
    if (month % 3 === 0 || isLast) {
      const pathX = Math.floor(isLast ? x + offset : x - offset) + 0.5;
  
      return <path d={`M${pathX},${y - 4}v${-35}`} stroke="red" />;
    }
    return null;
  };

function Assessement() {
  
  return (
    <Barchart>
        <Heading>Assessement Progress</Heading>
        <ResponsiveContainer width="100%" height="80%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tickFormatter={monthTickFormatter} />
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            interval={0}
            tick={renderQuarterTick}
            height={1}
            scale="band"
            xAxisId="quarter"
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Pending" fill="#d9d9d9" />
          <Bar dataKey="Completed" fill="#91b07c" />
        </BarChart>
      </ResponsiveContainer>
    </Barchart>
  )
}

export default Assessement
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(9),
  textAlign: 'center',
  fontSize: 10,
  color: theme.palette.warning.dark,
}));


// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}


const data = [
  createData('07:00', 0),
  createData('08:00', 100),
  createData('10:00', 300),
  createData('12:00', 200),
  createData('14:00', 400),
  createData('16:00', 600),
  createData('18:00', undefined),
];




export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
          <div className="px">     
      <Title>Performance</Title>
      </div>
      <div className="performance"> 
      <ResponsiveContainer>       
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
         
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.light
            }
            dot={false}
          />
        </LineChart>
        
      </ResponsiveContainer>
      </div>
    </React.Fragment>

  );
}

  
   

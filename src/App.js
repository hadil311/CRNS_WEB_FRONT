
import './App.css';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import Bar from './Bar';
import Card from './Card';
import Chart from './Chart';
import { Grid } from '@mui/material';


function App() {
  return (
    <div className="App">     
    <Card />
    <Chart/>
    </div>
  );
}

export default App;

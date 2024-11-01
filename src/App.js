import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './appbar.jsx';

import Footer from './footer.jsx';
import { AppBar } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Box from '@mui/material/Box';
import './my.css';
import Robot from './landing.jsx';
import Carsl from './events/events.jsx';

function App() {
  return (
    <div className="App" >
      <Box component="section" className='app-bg' sx={{}}>
        <ResponsiveAppBar />
        <Robot />
        <Carsl />
        <Footer />


      </Box>




    </div>
  );
}

export default App;

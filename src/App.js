import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResponsiveBar from './components/ResponsiveBar';
import ResponsiveLine from './components/ResponsiveLine';
import data from "./data";
import HomePage from "./HomePage";
import { Container } from '@material-ui/core';
import Header from './components/Header';
//import Sidebar from "./components/Sidebar";

const styles = {
  container: {
    padding: '20px',
    margin: '0',
    display: 'inline',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap'
  }
};

function App() {
  return (
    <Router>
      <div className="App" style={{ display: 'flex', justifyContent: 'center' }}>
        <Container style={styles.container}>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/bar-chart" element={<ResponsiveBar data={data} />} />
            <Route path="/line-chart" element={<ResponsiveLine data={data} />} />
          </Routes>
        </Container>
      </div>
      <div className="App" style={{ display: 'flex', justifyContent: 'center' }}>
        <Container style={{ ...styles.container, marginTop: 0 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;



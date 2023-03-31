import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ResponsiveBar from './components/ResponsiveBar';
import ResponsiveLine from './components/ResponsiveLine';
import data from "./data";

function App() {
  return (
    <Router>
      <div className="App">
        <Route
          path="/bar-chart"
          render={(props) => <ResponsiveBar data={data} {...props} />}
        />
        <Route
          path="/line-chart"
          render={(props) => <ResponsiveLine data={data} {...props} />}
        />
      </div>
    </Router>
  );
}

export default App;

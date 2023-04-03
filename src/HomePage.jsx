import React from "react";
import ResponsiveBar from './components/ResponsiveBar';
import ResponsiveLine from './components/ResponsiveLine';

const HomePage = ({ data }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ResponsiveBar data={data} />
      <ResponsiveLine data={data} />
    </div>
  );
};

export default HomePage;

  
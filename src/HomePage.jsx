import React from "react";
import ResponsiveBar from './components/ResponsiveBar';
import ResponsiveLine from './components/ResponsiveLine';
import  ResponsivePie from './components/ResponsivePie';

const HomePage = ({ data }) => {
  return (
    <div style={{ display: 'flex',background: "#ffffff", boxShadow: '0px 15px 20px black'  , marginTop: '20px', width: '100%'}}>
      <ResponsiveBar data={data} />
      <ResponsiveLine data={data} />
      <ResponsivePie data={data} />
    </div>

  );
};

export default HomePage;

import React from "react";
import ResponsiveBar from './components/ResponsiveBar';
import ResponsiveLine from './components/ResponsiveLine';

const HomePage = ({ data }) => {
  return (
    <div style={{ display: 'flex',color: "white", boxShadow: "2px 2px 5px black" , margin: "30px"}}>
      <ResponsiveBar data={data} />
      <ResponsiveLine data={data} />
    </div>
  );
};

export default HomePage;

  
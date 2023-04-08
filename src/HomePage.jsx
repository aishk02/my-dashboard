import React from "react";
import ResponsiveBar from './components/ResponsiveBar';
import ResponsiveLine from './components/ResponsiveLine';
import IconText from './components/Icon';


const HomePage = ({ data }) => {
  return (
    <div style={{ display: 'flex', background: "#ffffff", boxShadow: '10px 10px 20px #888888'  , marginTop: '20px', width: '100%'}}>
      <IconText icon="fa fa-line-chart" text="Diversity" />
      <ResponsiveBar data={data} />
      <IconText icon="fa fa-user" text="Hiring" />
      <ResponsiveLine data={data} />
    </div>
  );
};

export default HomePage;

// LineChart.jsx

import React from "react";
import { ResponsiveLine } from "@nivo/line";
import data from "../data";
import { Link } from 'react-router-dom';

const LineChart = () => {
  return (
    <div style={{ height: "325px",  width: "600px" }}>
      <h1 style={{ 
        fontSize: '15px', 
        fontWeight: 'bold',
        color: 'black', 
        margin: '0px',
        paddingLeft: '20px', 
      }}>
        <Link style={{textDecoration: 'none', color:'black'}} to="/line-chart">
          Line Chart</Link>
      </h1>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{ type: "linear", min: "auto", max: "auto", stacked: true, reverse: false }}
        curve="cardinal"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Date",
          legendOffset: 36,
          legendPosition: "middle"
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Value",
          legendOffset: -40,
          legendPosition: "middle"
        }}
        colors={{ scheme: "category10" }}
        enableGridX={false}
        enableGridY={false}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
      />
    </div>
  );
};

export default LineChart;

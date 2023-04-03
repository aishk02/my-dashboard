import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div style={{ width: "240px", backgroundColor: "#eee", height: "100vh" }}>
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/bar-chart">Bar Chart</Link>
        </li>
        <li>
          <Link to="/line-chart">Line Chart</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

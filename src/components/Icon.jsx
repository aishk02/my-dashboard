import React from "react";

const IconText = ({ icon, text }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
    <i className={icon} style={{ fontSize: '30px', color: '#606060', padding: '10px' }}></i>
    <span style={{marginLeft: '5px', fontWeight: 'bold', color: '#606060'}}>{text}</span>
  </div>
  );
};

export default IconText;

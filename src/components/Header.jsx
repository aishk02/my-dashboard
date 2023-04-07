import React from 'react';

const Header = () => {
  return (
    <header style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      background: 'linear-gradient(#d9d9d9, #4f395e)',
      padding: '15px',
      width: '1225px',
      height: '100px', 
    }}>
      <h1 style={{ 
        fontSize: '24px', 
        fontWeight: 'bold',
        color: '#ffff', 
        margin: 0 
      }}>Dashboard</h1>
       <i className="fa fa-home" style={{ fontSize: '30px', color: 'white', padding: '10px'}}></i>
    </header>
  );
};

export default Header;

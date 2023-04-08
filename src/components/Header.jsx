import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  vertical_line: {
    borderLeft: '3px solid #ffffff',
    height: '70px'
  }
};

const Header = () => {
  return (
    <header style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      background: 'linear-gradient(#d9d9d9, #4f395e)',
      padding: '15px',
      width: '97.5%',
      height: '100px', 
    }}>
      <h1 style={{ 
        fontSize: '30px', 
        fontWeight: 'normal',
        color: '#ffff', 
        margin: 0,
        padding: '10px',
        paddingBottom: '3px',
        fontFamily: 'Lora'
      }}>
        Dashboard
        <hr style={{color: '#ffffff', height:'1px', background: '#ffffff', width: '350px'}}/>
      </h1>
      <div style={styles.vertical_line}>
        <div style={{ paddingRight: '20px', paddingLeft: '20px', paddingTop: '10px'}}>
          <Link to="/">
            <i className="fa fa-home" style={{ fontSize: '30px', color: 'white', padding: '10px' }}></i>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

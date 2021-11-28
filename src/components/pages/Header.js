import React from 'react';
import '../styles/header.css';
import Paint from "../image/paint.jpg";

const styles = {
  headerStyle: {
    background: '#ffffff',
  },
  // headingStyle: {
  //   fontSize: '30px',
  // },
};

function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      {/* <h1 style={styles.headingStyle}> Welcome to my portfolio! </h1> */}
      <img src={Paint} alt="paint line" width="1500" height="auto"></img>
    </header>
  );
}

export default Header;
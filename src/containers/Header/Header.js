import React, { Component } from 'react';
import classes from './css/Header.module.css';

class Header extends Component {
  render() {
    return (
      <>
        <div className={classes.displayHeader}>
          <h1>Geraldo Figueiredo.</h1>
        </div>
      </>
    )
  }
}

export default Header;
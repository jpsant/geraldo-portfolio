import React, { Component } from 'react';
import classes from './css/Header.module.css';
import { connect } from 'react-redux';

import LanguageSwitcher from '../../components/languageSwitcher/languageSwitcher';

class Header extends Component {

  render() {
    return (
      <>
        <div className={classes.displayHeader}>
          <div className={classes.switcherContainer}>
            <LanguageSwitcher />
          </div>
          <div className={classes.headerTitle}>
            <h1>Geraldo Figueiredo.</h1>
            <h3>{this.props.language ? 'Programador' : 'Programmer'}</h3>
          </div>
          <div className={classes.social}>
            <a href="https://github.com/gerfg"><img className={classes.socialImg} alt="" src={require('./assets/github1.svg')}></img></a>
            <a href="lul"><img className={classes.socialImg} alt="" src={require('./assets/linkedin2.svg')}></img></a>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    language: state.language
  }
}

export default connect(mapStateToProps)(Header);
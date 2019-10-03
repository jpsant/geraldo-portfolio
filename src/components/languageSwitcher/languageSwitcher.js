import React, { Component } from 'react';
import classes from './css/languageSwitcher.module.css';
import * as actions from '../../store/actions/actionCreators';

import { connect } from 'react-redux';

class LanguageSwitcher extends Component {

    state = {
        language: false
    }

    languageChangerHandler = () => {
        this.setState(prevState => ({
            language: !prevState.language
        }));
        let state = this.state.language
        this.props.changeLanguage(state)
      }

    render() {

        return(
            <>
                <label className={classes.switch}>
                    <img alt="" className={classes.euaFlag} src={require('./assets/eua.svg')}></img>
                    <img alt="" className={classes.brazilFlag} src={require('./assets/brazil.svg')}></img>
                    <input  type="checkbox" onChange={this.languageChangerHandler} className={classes.input}></input>
                    <span className={classes.slider + ' ' + classes.round}></span>
                </label>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.language
    }
}

const mapDispatchToProps = dispatch => {
    return {
      changeLanguage: (language) => dispatch(actions.changeLanguage(language))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSwitcher);
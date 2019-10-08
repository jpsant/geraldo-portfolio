import React, { Component } from 'react';
import classes from './css/Footer.module.css';

import { connect } from 'react-redux';

class Footer extends Component {
    render() {
        return(
            <>
                <div className={classes.container}>
                    <div className={classes.title}>
                        <h1>Geraldo Figueiredo.</h1>
                        <h3>{this.props.language ? 'Programador' : 'Programmer'}</h3>
                    </div>
                    <div className={classes.socialMedia}>
                        <h1>{this.props.language ? 'Siga-me nas Redes Sociais!' : 'Follow me on my Social Media!'}</h1>
                        <hr className={classes.horizontalLine}></hr>
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

export default connect(mapStateToProps)(Footer);
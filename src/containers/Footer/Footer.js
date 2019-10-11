import React, { Component } from 'react';
import classes from './css/Footer.module.css';

import { connect } from 'react-redux';
import { Fade } from 'react-reveal';

class Footer extends Component {
    render() {
        return (
            <>
                <div className={classes.container}>
                    <Fade delay={200}>
                        <div className={classes.title}>
                            <h1>Geraldo Figueiredo.</h1>
                            <h3>{this.props.language ? 'Programador' : 'Programmer'}</h3>
                        </div>
                    </Fade>
                    <Fade delay={250}>
                        <div className={classes.socialMedia}>
                            <h1>{this.props.language ? 'Siga-me nas Redes Sociais!' : 'Follow me on my Social Media!'}</h1>
                            <hr className={classes.horizontalLine}></hr>
                            <Fade up delay={500} >
                                <div className={classes.icons}>
                                    <a href="https://www.facebook.com/geraldo.junior.90226"><img alt="" className={classes.socialIcons} src={require('./assets/facebook.svg')}></img></a>
                                    <a href="https://www.instagram.com/geraldofiguer/"><img alt="" className={classes.socialIcons} src={require('./assets/instagram.svg')}></img></a>
                                    <a href="https://twitter.com/geraldofsantana"><img alt="" className={classes.socialIcons} src={require('./assets/twitter.svg')}></img></a>
                                </div>
                            </Fade>
                        </div>
                    </Fade>
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
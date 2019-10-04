import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Fade } from 'react-reveal';

import classes from './css/Skills.module.css';

class Skills extends Component {
    render() {
        return (
            <>
                <div className={classes.container}>
                    <div className={classes.skillsContainer}>
                        <div className={classes.title}>
                            <h1>Habilidades</h1>
                        </div>
                        <div className={classes.skills}>
                            <Fade top cascade >
                            <div className={classes.block1}>
                                <div><img alt="" className={classes.skillIcon} src={require('./assets/icons/1.svg')}></img></div>
                                <div><img alt="" className={classes.skillIcon} src={require('./assets/icons/2.svg')}></img></div>
                                <div><img alt="" className={classes.skillIcon} src={require('./assets/icons/3.png')}></img></div>
                            </div>
                            <div className={classes.block2}>
                                <div><img alt="" className={classes.skillIcon} src={require('./assets/icons/4.png')}></img></div>
                                <div><img alt="" className={classes.skillIcon} src={require('./assets/icons/5.png')}></img></div>
                                <div><img alt="" className={classes.skillIcon} src={require('./assets/icons/6.png')}></img></div>
                            </div>
                            <div className={classes.block3}>
                                <div><img alt="" className={classes.skillIcon} src={require('./assets/icons/7.png')}></img></div>
                                <div><img alt="" className={classes.skillIcon} src={require('./assets/icons/8.png')}></img></div>
                                <div><img alt="" className={classes.skillIcon} src={require('./assets/icons/9.png')}></img></div>
                            </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Skills;
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
                                    <div className={classes.golang}>
                                        <span className={classes.tooltipText}>Golang</span>
                                        <img alt="" className={classes.skillIcon} src={require('./assets/icons/1.svg')}></img>
                                    </div>
                                    <div className={classes.docker}>
                                        <span className={classes.tooltipText}>Docker</span>
                                        <img alt="" className={classes.skillIcon} src={require('./assets/icons/2.svg')}></img>
                                    </div>
                                    <div className={classes.grpc}>
                                        <span className={classes.tooltipText}>GRPC</span>
                                        <img alt="" className={classes.skillIcon} src={require('./assets/icons/3.png')}></img>
                                    </div>
                                </div>
                                <div className={classes.block2}>
                                    <div className={classes.c}>
                                        <span className={classes.tooltipText}>C++</span>
                                        <img alt="" className={classes.skillIcon} src={require('./assets/icons/4.png')}></img>
                                    </div>
                                    <div className={classes.plant}>
                                        <span className={classes.tooltipText}>Plantinha</span>
                                        <img alt="" className={classes.skillIcon} src={require('./assets/icons/5.png')}></img>
                                    </div>
                                    <div className={classes.mysql}>
                                        <span className={classes.tooltipText}>MySQL</span>
                                        <img alt="" className={classes.skillIcon} src={require('./assets/icons/6.png')}></img>
                                    </div>
                                </div>
                                <div className={classes.block3}>
                                    <div className={classes.javascript}>
                                        <span className={classes.tooltipText}>Javascript</span>
                                        <img alt="" className={classes.skillIcon} src={require('./assets/icons/7.png')}></img>
                                    </div>
                                    <div className={classes.nodejs}>
                                        <span className={classes.tooltipText}>NodeJs</span>
                                        <img alt="" className={classes.nodeJs} src={require('./assets/icons/8.svg')}></img>
                                    </div>
                                    <div className={classes.otimizacao}>
                                        <span className={classes.tooltipText}>Otimização</span>
                                        <img alt="" className={classes.skillIcon} src={require('./assets/icons/9.svg')}></img>
                                    </div>
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
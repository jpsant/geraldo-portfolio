import React, { Component } from 'react';
import classes from './css/About.module.css';
import { Fade } from 'react-reveal';

class Sections extends Component {

    render() {

        return (
            <>
                <div className={classes.sectionsContainer}>
                    <div className={classes.sectionOne}>
                        <div className={classes.textContainer}>
                            <div style={{ alignSelf: 'center' }}>
                                <Fade top>
                                    <h1>Section 1</h1>
                                </Fade>
                                <Fade>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus suscipit nibh, vel dignissim diam viverra a.
                                        Sed consectetur efficitur ultrices. Curabitur tincidunt urna in leo maximus, nec fermentum eros ultrices.
                                        Cras a dui sit amet ipsum vulputate commodo non sit amet orci. Nullam augue metus, congue sed rhoncus id,
                                        rhoncus in justo. Sed mi erat, tristique at lectus vel, condimentum finibus magna.
                                        Sed ac erat vitae turpis suscipit dapibus.
                            </p>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus suscipit nibh, vel dignissim diam viverra a.
                                        Sed consectetur efficitur ultrices. Curabitur tincidunt urna in leo maximus, nec fermentum eros ultrices.
                                        Cras a dui sit amet ipsum vulputate commodo non sit amet orci. Nullam augue metus, congue sed rhoncus id,
                                        rhoncus in justo. Sed mi erat, tristique at lectus vel, condimentum finibus magna.
                                        Sed ac erat vitae turpis suscipit dapibus.
                            </p>

                                </Fade>
                            </div>

                        </div>

                        <div className={classes.cover} >
                            <img alt="" className={classes.coverImg} src={require('./assets/photos/1.jpeg')}></img> 
                        </div>

                    </div>
                    <div className={classes.sectionTwo}>
                        <div className={classes.textContainer}>
                            <div style={{ alignSelf: 'center' }}>
                                <Fade top>
                                    <h1>Section 2</h1>
                                </Fade>
                                <Fade>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus suscipit nibh, vel dignissim diam viverra a.
                                        Sed consectetur efficitur ultrices. Curabitur tincidunt urna in leo maximus, nec fermentum eros ultrices.
                                        Cras a dui sit amet ipsum vulputate commodo non sit amet orci. Nullam augue metus, congue sed rhoncus id,
                                        rhoncus in justo. Sed mi erat, tristique at lectus vel, condimentum finibus magna.
                                        Sed ac erat vitae turpis suscipit dapibus.
                            </p>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus suscipit nibh, vel dignissim diam viverra a.
                                        Sed consectetur efficitur ultrices. Curabitur tincidunt urna in leo maximus, nec fermentum eros ultrices.
                                        Cras a dui sit amet ipsum vulputate commodo non sit amet orci. Nullam augue metus, congue sed rhoncus id,
                                        rhoncus in justo. Sed mi erat, tristique at lectus vel, condimentum finibus magna.
                                        Sed ac erat vitae turpis suscipit dapibus.
                            </p>

                                </Fade>
                            </div>
                        </div>

                        <div className={classes.cover}>
                            <img alt="" className={classes.coverImg} src={require('./assets/photos/2.jpeg')}></img>
                        </div>

                    </div>
                    <div className={classes.sectionThree}>
                        <div className={classes.textContainer}>
                            <div style={{ alignSelf: 'center' }}>
                                <Fade top>
                                    <h1>Section 3</h1>
                                </Fade>
                                <Fade>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus suscipit nibh, vel dignissim diam viverra a.
                                        Sed consectetur efficitur ultrices. Curabitur tincidunt urna in leo maximus, nec fermentum eros ultrices.
                                        Cras a dui sit amet ipsum vulputate commodo non sit amet orci. Nullam augue metus, congue sed rhoncus id,
                                        rhoncus in justo. Sed mi erat, tristique at lectus vel, condimentum finibus magna.
                                        Sed ac erat vitae turpis suscipit dapibus.
                            </p>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus suscipit nibh, vel dignissim diam viverra a.
                                        Sed consectetur efficitur ultrices. Curabitur tincidunt urna in leo maximus, nec fermentum eros ultrices.
                                        Cras a dui sit amet ipsum vulputate commodo non sit amet orci. Nullam augue metus, congue sed rhoncus id,
                                        rhoncus in justo. Sed mi erat, tristique at lectus vel, condimentum finibus magna.
                                        Sed ac erat vitae turpis suscipit dapibus.
                            </p>

                                </Fade>
                            </div>
                        </div>
                        <div className={classes.cover}>
                            <img alt="" className={classes.coverImg} src={require('./assets/photos/3.jpg')}></img>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Sections;
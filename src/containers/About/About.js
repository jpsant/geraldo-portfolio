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
                                    <h1>Olá Mundo</h1>
                                </Fade>
                                <Fade>
                                    <h2>
                                        Me chamo Geraldo Figueiredo e através dos conhecimentos obtidos durante o curso de engenharia de computação (UFPB)
                                        trilhei uma linha de pesquisa e estudos voltados para desenvolvimento back-end, mais precisamente,
                                        desenvolvendo API's e algoritmos para otimização combinatória.
                                    </h2>

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
                                    <h1>Resumo Técnico</h1>
                                </Fade>
                                <Fade>
                                    <h3>
                                        Desenvolvo grande parte de minhas API's utilizando Golang ou Node.js como linguagem principal, 
                                        seja o desenvolvimento de um monolito ou um sistema baseado em microserviços. Para comunicação 
                                        entre os microserviços, utilizo o protocolo gRPC, e, por fim, Docker para deploy e escalabilidade 
                                        dos serviços.
                                    </h3>

                                    <h3>
                                        Para Otimização Combinatória, por ser necessário extrema eficiência e leveza, utilizo C++ para desenvolver o otimizador,
                                        e, para uma interface, web ou console, utilizo novamente Golang.
                                    </h3>

                                    <h3>
                                        Em relação a banco de dados, depois de uma análise mais criteriosa para entender se existe a 
                                        necessidade de um banco de dados relacional ou de um não relacional, utilizo MongoDB como não relacional
                                        e MySQL/SQLServer como relacional.
                                    </h3>
                                </Fade>
                            </div>
                        </div>

                        <div className={classes.cover}>
                            <img alt="" className={classes.coverImg} src={require('./assets/photos/2.jpg')}></img>
                        </div>

                    </div>
                    <div className={classes.sectionThree}>
                        {/* <div className={classes.textContainer}>
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
                        </div> */}
                        <div className={classes.cover1}>
                            <img alt="" className={classes.coverImg1} src={require('./assets/photos/3.jpeg')}></img>
                        </div>
                        <div className={classes.cover2}>
                            <img alt="" className={classes.coverImg2} src={require('./assets/photos/4.jpeg')}></img>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Sections;
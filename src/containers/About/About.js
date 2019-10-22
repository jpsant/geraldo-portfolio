import React, { Component } from 'react';
import classes from './css/About.module.css';
import { Fade } from 'react-reveal';

import { connect } from 'react-redux';

class Sections extends Component {

    render() {

        return (
            <>
                <div className={classes.sectionsContainer}>
                    <div className={classes.sectionOne}>
                        <div className={classes.textContainer}>
                            <div style={{ alignSelf: 'center' }}>
                                <Fade>
                                    <h1>{this.props.language ? 'Olá Mundo!' : 'Hello World!'}</h1>
                                </Fade>
                                <Fade>
                                    <h2>
                                        {
                                            this.props.language ? `Me chamo Geraldo Figueiredo e através dos conhecimentos obtidos durante o curso de engenharia de computação (UFPB)
                                            trilhei uma linha de pesquisa e estudos voltados para desenvolvimento back-end, mais precisamente,
                                            desenvolvendo API's e algoritmos para otimização combinatória.` : `My name is Geraldo Figueiredo and through the knowledge obtained during the course of computer engineering (UFPB) 
                                            I followed a line of research and studies focused on development backend, more precisely developing APIs and algorithms for combinatorial optimization.`
                                        }
                                    </h2>

                                </Fade>
                            </div>

                        </div>

                        <div className={classes.cover} >
                            <img alt="" className={classes.coverImg} src={require('./assets/photos/1.jpg')}></img>
                        </div>

                    </div>
                    <div className={classes.sectionTwo}>
                        <div className={classes.textContainer}>
                            <div style={{ alignSelf: 'center' }}>
                                <Fade>
                                    <h1>{this.props.language ? 'Resumo Técnico' : 'Technical Summary'}</h1>
                                </Fade>
                                <Fade>
                                    <h3>
                                        {
                                            this.props.language ? `Desenvolvo grande parte de minhas API's utilizando Golang ou Node.js como linguagem principal, 
                                            seja o desenvolvimento de um monolito ou um sistema baseado em microserviços. Para comunicação 
                                            entre os microserviços, utilizo o protocolo gRPC, e, por fim, Docker para deploy e escalabilidade 
                                            dos serviços.` : `I develop most of my APIs using Golang or Node.js as the main language,
                                            whether it's developing a monolith or a microservice based system. For communication
                                            between microservices, I use the gRPC protocol, and finally Docker for deploy and scalability
                                            of services.`
                                        }
                                    </h3>

                                    <h3>
                                        {
                                            this.props.language ? `Para Otimização Combinatória, por ser necessário extrema eficiência e leveza, utilizo C++ para desenvolver o otimizador,
                                            e, para uma interface, web ou console, utilizo novamente Golang.` : `For Combinatorial Optimization, because extreme efficiency and lightness is required, 
                                            I use C ++ to develop the optimizer,and for an interface, web or console, I use Golang again.`
                                        }
                                    </h3>

                                    <h3>
                                        {
                                            this.props.language ? `Em relação a banco de dados, depois de uma análise mais criteriosa para entender se existe a 
                                            necessidade de um banco de dados relacional ou de um não relacional, utilizo MongoDB como não relacional
                                            e MySQL/SQLServer como relacional.` : `Regarding database, after a more careful analysis to understand if there is a
                                            need for a relational or nonrelational database, I use MongoDB as nonrelational
                                            and MySQL / SQLServer as relational.`
                                        }
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
                            <img alt="" className={classes.coverImg1} src={require('./assets/photos/3.jpg')}></img>
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

const mapStateToProps = state => {
    return {
        language: state.language
    }
}

export default connect(mapStateToProps)(Sections);
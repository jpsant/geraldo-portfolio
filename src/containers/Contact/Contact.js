import React, { Component } from 'react';
import classes from './css/Contact.module.css';

import { connect } from 'react-redux';
import { Fade } from 'react-reveal';

class Contact extends Component {
    render() {
        return (
            <>
                <div className={classes.container}>
                    <div className={classes.titleContainer}>
                        <h1>{this.props.language ? 'Gostou do meu Perfil?' : 'Did you like my profile?'}</h1>
                        <h2>{this.props.language ? 'Entre em Contato!' : 'Contact me!'}</h2>
                    </div>
                    <div className={classes.columnsContainer}>
                        <div className={classes.columnOne}>
                            <h1>cover or Text</h1>
                        </div>
                        <Fade>
                            <div className={classes.columnTwo}>
                                <form action="mailto:geraldo.figueiredosj@gmail.com" method="post" encType="text/plain" className={classes.emailModal}>
                                    <div className={classes.name}>
                                        <label htmlFor="fname">{this.props.language ? 'Nome' : 'Name'}</label>
                                        <input type="text" id="fname" name="name" placeholder={this.props.language ? 'Nome' : 'Name'} />
                                    </div>
                                    <div className={classes.subject}>
                                        <label htmlFor="lname">{this.props.language ? 'Assunto' : 'Subject'}</label>
                                        <input type="text" id="lname" name="subject" placeholder={this.props.language ? 'Assunto' : 'Subject'} />
                                    </div>
                                    <div className={classes.body}>
                                        <label htmlFor="subject">{this.props.language ? 'Mensagem' : 'Message'}</label>
                                        <textarea id="subject" name="body" placeholder={this.props.language ? 'Texto da mensagem' : 'Message Text'}></textarea>
                                    </div>
                                    <div className={classes.submit}>
                                        <input type="submit" value={this.props.language ? 'Enviar!' : 'Send!'} />
                                    </div>
                                </form>
                            </div>
                        </Fade>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.language
    }
}

export default connect(mapStateToProps)(Contact);
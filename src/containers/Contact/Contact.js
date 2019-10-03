import React, { Component } from 'react';
import classes from './css/Contact.module.css';

class Contact extends Component {
    render() {
        return (
            <>
                <div className={classes.container}>
                    <div className={classes.titleContainer}>
                        <h1>Gostou do meu Perfil?</h1>
                        <h2>Entre em Contato!</h2>
                    </div>
                    <div className={classes.cardsContainer}>
                        <div className={classes.cardOne}>
                            <h1>Card One</h1>
                        </div>
                        <div className={classes.cardTwo}>
                            <h1>Card Two</h1>
                        </div>
                        <div className={classes.buttonContainer}>
                            <button>Email</button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Contact;
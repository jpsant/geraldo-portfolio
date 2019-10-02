import React from 'react';
import classes from './css/projectCard.module.css'

const projectCard = (props) => {
    return (
        <>
            <div className={classes.cardContainer}>
                <div className={classes.cardTitle}>
                    <h1>Título</h1>
                </div>
                <div className={classes.subTitle}>
                    <h2>Descrição</h2>
                </div>
                <div className={classes.languages}>
                    <div className={classes.title}>
                        <h2>Linguagens</h2>
                    </div>
                    <div className={classes.languageNames}>
                        <h2>Golang</h2>
                        <h2>python</h2>
                    </div>
                </div>
                <div className={classes.links}>
                    <h2>Links</h2>
                </div>
            </div>
        </>
    );
}

export default projectCard;
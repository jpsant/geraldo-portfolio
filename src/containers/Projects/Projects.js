import React, { Component } from 'react';
import classes from './css/Projects.module.css';
import { connect } from 'react-redux';

import ProjectCard from '../../components/projectCard/projectCard';

class Projects extends Component {
    render() {
        return (
            <>
                <div className={classes.projectsContainer}>
                    <div className={classes.projectsTitle}>
                        <div className={classes.container}>
                            <h1>{this.props.language ? 'Meus Projetos' : 'My Projects'}</h1>
                        </div>
                    </div>
                    <div className={classes.cardContainer}>
                        <ProjectCard language={this.props.language} />
                        <ProjectCard language={this.props.language} />
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

export default connect(mapStateToProps)(Projects);
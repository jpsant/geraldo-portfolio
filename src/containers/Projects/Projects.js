import React, { Component } from 'react';
import classes from './css/Projects.module.css';

import ProjectCard from '../../components/projectCard/projectCard';

class Projects extends Component {
    render() {
        return (
            <>
                <div className={classes.projectsContainer}>
                    <div className={classes.projectsTitle}>
                        <div className={classes.container}>
                            <h1>Projects!</h1>
                        </div>
                    </div>
                    <div className={classes.cardContainer}>
                        <ProjectCard />
                        <ProjectCard />
                    </div>
                </div>
            </>
        )
    }
}

export default Projects;
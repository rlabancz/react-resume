import React, { Component } from 'react';

import '@material-design-icons/font/filled.css';
import styles from './styles.css';
export class WorkExperience extends Component {

    render() {
        const {data} = this.props;

        return (
            <div className='workExperienceContainer'>
                {data.map((experience, key) =>
                    <>
                        <div className={`${styles.sectionTitle}`}>
                            <div className={`${styles.companyName}`}>
                                {experience.company}
                            </div>
                            <div className={`${styles.companyName}`}>
                                {experience.startDate} - {experience.endDate ? experience.endDate : 'Present'}
                            </div>
                        </div>
                        <div className={`${styles.sectionTitle}`}>
                            {experience.title}
                        </div>

                        <div className={`${styles.sectionDescription}`}>
                            <ul>
                                {experience.description.map((description, key) =>
                                    <li>{description}</li>
                                )}
                            </ul>
                        </div>
                    </>
                )}
            </div>
        );
    }
}

export default WorkExperience;
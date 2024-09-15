import React, { Component } from 'react';

import '@material-design-icons/font/filled.css';
import styles from './styles.css';

export class Education extends Component {
    render() {
        const {theme, data} = this.props;

        return (
            theme === 'minimal' ?
                <div className={styles['educations']}>
                    {data.map((education, key) =>
                        <div className={`education`} key={key}>
                            <div className={`education-title`}>
                                <div className={`education-left`}>
                                    <div><strong>{education.institution}</strong></div>
                                    <div>{education.area}</div>
                                </div>
                                <div className={`experience-right`}>
                                    <div><strong>{education.location}</strong></div>
                                    <div>{education.startDate} - {education.endDate ? education.endDate : 'Present'}</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                :
                <div className='educationContainer'>
                    {data.map((education, key) =>
                        <div className={`educationItem`} key={key}>
                            <div className={`educationArea`}>
                                {education.area}
                            </div>
                            <div className={`educationTimeframe`}>
                                {education.startDate} - {education.endDate ? education.endDate : 'Present'}
                            </div>
                            <div className={`educationInstitution`}>
                                {education.institution}
                            </div>
                        </div>
                    )}
                </div>
        );
    }
}

export default Education;
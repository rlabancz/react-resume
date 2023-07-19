import React, { Component } from 'react';

import '@material-design-icons/font/filled.css';
import styles from './styles.css';
export class Education extends Component {
    render() {
        const {data} = this.props;

        return (
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
import React, { Component } from 'react';

import '@material-design-icons/font/filled.css';
import styles from './styles.css';
export class WorkExperience extends Component {

    render() {
        const {data} = this.props;
        return (
            <div className='workExperienceContainer'>
                {data.map((experience, key) =>
                    <div className={`workExperience`} key={key}>
                        <div className={`workExperienceHeader`}>
                            {experience.company ?
                                <div className={`companyName ${key === 0 ? 'most-recent': ''}`}>
                                    {experience.company} <span className={`companyLocation`}>({experience.location})</span>
                                </div>
                                : null
                            }
                            <div className={`companyPosition`}>
                                <div className={`companyTitle`}>
                                    {experience.title}
                                </div>

                                <div className={`companyTimeframe`}>
                                    <div>{experience.startDate} - {experience.endDate ? experience.endDate : 'Present'}
                                    </div>
                                    <div className="divider-circle">
                                        <div className="circle">
                                            <div className="circle inner"></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`companyDescription`}>
                            <ul className={`companyDescriptionList`}>
                                {experience.description.map((description, key) =>
                                    <li className={`companyDescriptionItem`} key={key}>{description}</li>
                                )}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default WorkExperience;
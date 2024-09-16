import React, { Component } from 'react';

import '@material-design-icons/font/filled.css';
import styles from './styles.css';

export class WorkExperience extends Component {

    render() {
        const {theme, data} = this.props;

        return (
            data ?
                theme === 'minimal' ?
                    <div className={styles['experiences']}>
                        {data.map((experience, key) =>
                            <div className={`experience`} key={key}>
                                <div className={`experience-title`}>
                                    <div className={`experience-left`}>
                                        <div><strong>{experience.company}</strong></div>
                                        <div>{experience.title}</div>
                                    </div>
                                    <div className={`experience-right`}>
                                        <div><strong>{experience.location}</strong></div>
                                        <div>{experience.startDate} - {experience.endDate ? experience.endDate : 'Present'}</div>
                                    </div>
                                </div>
                                <ul className={`experience-description`}>
                                    {experience.description.map((description, key) =>
                                        <li className={``} key={key}
                                            dangerouslySetInnerHTML={{__html: description}}></li>
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>
                    :
                    <div className="workExperienceContainer">
                        {data.map((experience, key) =>
                            <div className={`workExperience`} key={key}>
                                <div className={`workExperienceHeader`}>
                                    {experience.company ?
                                        <div className={`companyName ${key === 0 ? 'most-recent' : ''}`}>
                                            <a href={experience.website} className={`companyLink`} target="_blank"
                                               rel="noopener noreferrer">{experience.company}</a> <span
                                            className={`companyLocation`}>({experience.location})</span>
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
                                            <li className={`companyDescriptionItem`} key={key} dangerouslySetInnerHTML={{__html: description}}></li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                : <></>
        );
    }
}

export default WorkExperience;
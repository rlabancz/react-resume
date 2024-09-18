import React, { Component } from 'react';

import '@material-design-icons/font/filled.css';
import '@material-design-icons/font/outlined.css';
import styles from './styles.css';

export class Skills extends Component {

    render() {
        const {theme, data, showBar = false} = this.props;

        const showSkillBar = showBar;

        return (
            data ?
                theme === 'minimal' ?
                    <div className={styles['skills']}>
                        {data.map((skill, key) =>
                            <span key={key}>{skill.name}, </span>
                        )}
                    </div>
                    :
                    <div className='skillsContainer'>
                        {data.map((skill, key) =>
                            <div className={`skillItem`} key={key}>
                                <div className={`skillName`}>
                                    {skill.name}
                                </div>
                                {showSkillBar && skill.level ?
                                    <div className={`skillLevel`}>
                                        <div className={`skillBox`}>
                                            <div className={`skillFill fill-${skill.level}`}></div>
                                        </div>
                                    </div>
                                    : null
                                }
                            </div>
                        )}
                    </div>
                : <></>
        );
    }
}

export default Skills;
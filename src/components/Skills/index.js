import React, { Component } from 'react';

import '@material-design-icons/font/filled.css';
import '@material-design-icons/font/outlined.css';
import styles from './styles.css';
export class Skills extends Component {

    render() {
        const {data, showBar} = this.props;

        const showSkillBar = showBar;

        return (
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
        );
    }
}

export default Skills;
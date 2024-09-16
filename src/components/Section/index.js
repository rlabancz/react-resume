import React, { Component } from 'react';

import '@material-design-icons/font/filled.css';
import styles from './styles.css';

export class Section extends Component {

    render() {
        const {theme, title, icon, body} = this.props;

        return (
            body ?
                theme === 'minimal' ?
                    <div className={styles['section']}>
                        <div className={`section-title`}>{title}</div>
                        {body}
                    </div>
                    :
                    <div className='sectionContainer'>
                        {title ? (
                            <div className={`sectionTitle`}>
                                <div className="material-icons sectionIcon">{icon}</div>
                                <h3 className={`sectionTitleName`}>
                                    {title}
                                </h3>
                            </div>
                        ) : null}
                        <div className={`sectionBody`}>
                            {body}
                        </div>
                    </div>
                : <></>
        );
    }
}

export default Section;
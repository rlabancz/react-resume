import React, { Component } from 'react';

import '@material-design-icons/font/filled.css';
import styles from './styles.css';
export class Section extends Component {

    render() {
        const {title, icon, body} = this.props;

        return (
            <div className='sectionContainer'>
                <div className={`sectionTitle`}>
                        <div className="material-icons sectionIcon">{icon}</div>
                    <h3 className={`sectionTitleName`}>
                        {title}
                    </h3>
                </div>
                <div className={`sectionBody`}>
                    {body}
                </div>
            </div>
        );
    }
}

export default Section;
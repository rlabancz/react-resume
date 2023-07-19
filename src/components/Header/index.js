import React, { Component } from 'react';

import '@material-design-icons/font/filled.css';
import styles from './styles.css';
export class Header extends Component {

    render() {
        const {data} = this.props;

        return (
            <header className='resume-header'>
                <div className={`headerContainer`}>
                    <h1 className={`name`}>
                        {data.name}
                    </h1>
                    <h5 className={`title`}>
                        {data.summary}
                    </h5>
                </div>
            </header>
        );
    }
}

export default Header;
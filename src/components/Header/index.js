import React, { Component } from 'react';

import '@material-design-icons/font/filled.css';
import styles from './styles.css';

export class Header extends Component {

    render() {
        const {theme, data} = this.props;

        return (
            <header className='resume-header'>
                <div className={`${theme === 'minimal' ? '' : 'headerContainer'}`}>
                    <h1 className={`name`}>
                        {data.name}
                    </h1>
                    <h5 className={`title`}>
                        {data.title}
                    </h5>
                </div>
            </header>
        );
    }
}

export default Header;
import React, { Component } from 'react';

import '@material-design-icons/font/filled.css';
import '@material-design-icons/font/outlined.css';
import styles from './styles.css';

export class Launches extends Component {

    render() {
        const {theme, data} = this.props;

        return (
            data ?
                theme === 'minimal' ?
                    <div className={styles['launch']}>
                        {data.map((launch, key) =>
                            <span key={key}>{launch.name}, </span>
                        )}
                    </div>
                    :
                    <div className='launchesContainer'>
                        {data.map((launch, key) =>
                            <div className={`launchItem`} key={key}>
                                <div className={`launchName`}>
                                    {
                                        launch.link ?
                                            <a href={launch.link} className={`launchLink`} target='_blank' rel='noopener noreferrer'>{launch.name}</a>
                                            :
                                            <span>{launch.name}</span>
                                    }
                                </div>
                            </div>
                        )}
                    </div>
                : <></>
        );
    }
}

export default Launches;
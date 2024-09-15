import React, { Component } from 'react';

import '@material-design-icons/font/filled.css';
import '@material-design-icons/font/outlined.css';
import styles from './styles.css';
export class Launches extends Component {

    render() {
        const {data} = this.props;

        return (
            <div className='launchesContainer'>
                {data.map((launch, key) =>
                    <div className={`launchItem`} key={key}>
                        <div className={`launchName`}>
                            {
                                launch.link ?
                                    <a href={launch.link} className={`launchLink`} target='_blank' rel='noopener noreferrer'>{launch.name}</a>
                                    :
                                launch.name
                            }
                        </div>
                    </div>

                )}

            </div>
        );
    }
}

export default Launches;
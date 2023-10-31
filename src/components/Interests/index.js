import React, { Component } from 'react';

import '@material-design-icons/font/outlined.css';
import styles from './styles.css';
export class Interests extends Component {

    render() {
        const {data} = this.props;

        return (
            <div className='interestsContainer'>
                {data.map((interest, key) =>
                    <div className={`interestItem`} key={key}>
                        <div className={`material-icons-outlined interestIcon`}>
                            {interest.icon}
                        </div>
                        <div className={`interestName`}>
                            {interest.name}
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default Interests;
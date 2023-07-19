import React, { Component } from 'react';

import '@material-design-icons/font/filled.css';
import styles from './styles.css';
export class Contact extends Component {

    render() {
        const {data} = this.props;

        return (
            <div className='contactContainer'>
                <div className={`contactItem`}>
                    <span className="material-icons contactIcon">mail</span> {data.email}
                </div>
                <div className={`contactItem`}>
                    <span className="material-icons contactIcon">call</span> {data.phone}
                </div>
                <div className={`contactItem`}>
                    <span className="material-icons contactIcon">person_pin_circle</span> {data.location}
                </div>
                <div className={`contactItem`}>
                    <span className="material-icons contactIcon">alternate_email</span> {data.username}
                </div>
            </div>
        );
    }
}

export default Contact;
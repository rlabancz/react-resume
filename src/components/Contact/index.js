import React, { Component } from 'react';

import '@material-design-icons/font/filled.css';
import styles from './styles.css';
export class Contact extends Component {

    render() {
        const {data} = this.props;

        return (
            <div className='contactContainer'>
                <div className={`contactItem`}>
                    <div className={`material-icons-outlined contactIcon`}>mail</div>
                    <div className={`contactItem`}><a href={`mailto:${data.email}`}>{data.email}</a></div>
                </div>
                <div className={`contactItem`}>
                    <div className={`material-icons-outlined contactIcon`}>call</div>
                    <div className={`contactItem`}><a href={`tel:${data.phone}`}>{data.phone}</a></div>
                </div>
                <div className={`contactItem`}>
                    <div className={`material-icons-outlined contactIcon`}>person_pin_circle</div>
                    <div className={`contactItem`}>{data.location}</div>
                </div>
                <div className={`contactItem`}>
                    <div className={`material-icons-outlined contactIcon`}>code</div>
                    <div className={`contactItem`}>
                        <a href={`https://github.com/${data.github}`}>{data.github}</a>
                    </div>
                </div>
                {data.socialMedia && data.socialMedia.map((socialMedia, key) =>
                    <div className={`contactItem`} key={key}>
                        <div className={`material-icons-outlined contactIcon`}>{socialMedia.icon}</div>
                        <div className={`contactItem`}>
                            <a href={`${socialMedia.url}/${socialMedia.username}`}>{socialMedia.username}</a>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default Contact;
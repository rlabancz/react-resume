import React, { Component } from 'react';

import '@material-design-icons/font/filled.css';
import styles from './styles.css';

export class Contact extends Component {

    render() {
        const {theme, data} = this.props;

        return (
            data ?
                theme === 'minimal' ?
                    <div className={styles['contact']}>
                        {data.email ? `${data.email} •` : ''} {data.phone ? `${data.phone} •` : ''} {data.location ? `${data.location} •` : ''}
                    </div>
                    :
                    <div className='contactContainer'>
                        {data.email ? <div className={`contactItem`}>
                            <div className={`material-icons-outlined contactIcon`}>mail</div>
                            <div className={`contactItem`}><a href={`mailto:${data.email}`}>{data.email}</a></div>
                        </div> : null }
                        {data.phone ? <div className={`contactItem`}>
                            <div className={`material-icons-outlined contactIcon`}>call</div>
                            <div className={`contactItem`}><a href={`tel:${data.phone}`}>{data.phone}</a></div>
                        </div> : null }
                        {data.location ? <div className={`contactItem`}>
                            <div className={`material-icons-outlined contactIcon`}>person_pin_circle</div>
                            <div className={`contactItem`}>{data.location}</div>
                        </div> : null }
                        {data.github ? <div className={`contactItem`}>
                            <div className={`material-icons-outlined contactIcon`}>code</div>
                            <div className={`contactItem`}>
                                <a href={`https://github.com/${data.github}`}>{data.github}</a>
                            </div>
                        </div> : null }
                        {data.socialMedia && data.socialMedia.map((socialMedia, key) =>
                            <div className={`contactItem`} key={key}>
                                {socialMedia.icon ?
                                    <div className={`material-icons-outlined contactIcon`}>{socialMedia.icon}</div>
                                    : null
                                }

                                {!socialMedia.icon && socialMedia.svg ?
                                    <div className="contactIcon" dangerouslySetInnerHTML={{__html: socialMedia.svg}}/>
                                    : null
                                }

                                <div className={`contactItem`}>
                                    <a href={`${socialMedia.url}/${socialMedia.username}`}>{socialMedia.username}</a>
                                </div>
                            </div>
                        )}
                    </div>
                : <></>
        );
    }
}

export default Contact;
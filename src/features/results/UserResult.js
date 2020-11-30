import React from 'react';
import './Result.css';

export const UserResult = ({ info }) => {
    return (
        <div className='result'>
            <img width={64} height={64} src={info.avatar_url}  />
            <a className='result-name' href={info.html_url}>{info.login}</a>
        </div>
    )
}

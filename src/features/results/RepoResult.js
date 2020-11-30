import React from 'react';
import './Result.css';

export const RepoResult = ({ info }) => {
    return (
        <div className='result'>
            <a className='result-name' href={info.html_url}>{info.full_name}</a>
            <div>
                <div><a className='result-homepage' href={info.homepage}>Homepage</a></div>
                <div>Owner: <a href={info.owner.html_url}>{info.owner.login}</a></div>
                <div>Language: {info.language}</div>
                <div>Forks: <a href={info.forks_url}>{info.forks}</a></div>
                <div>Open Issues: <a href={info.issues_url}>{info.open_issues_count}</a></div>
            </div>
        </div>
    )
}

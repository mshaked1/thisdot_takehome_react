import React from 'react';
import './Result.css';

export const TopicResult = ({ info }) => {
    return (
        <div className='result'>
            <div className='result-name'>{info.name}</div>
            {info.created_by && <div>Created by: {info.created_by}</div>}
            {info.short_description && <div>{info.short_description}</div>}
        </div>
    )
}

import React from 'react';
import { useDispatch } from 'react-redux';
import { getResultsAsync } from '../search/searchSlice';

export const Buttons = ({ searchTerm, searchCategory, currentPage, isLoading, totalPages }) => {
    const dispatch = useDispatch();

    return (
        <div className='results-buttons'>
            <button
                className='first-page-btn'
                onClick={() => dispatch(getResultsAsync({searchTerm, searchCategory}))}
                disabled={isLoading || currentPage === 1}
            >First</button>
            <button
                className='prev-page-btn'
                onClick={() => dispatch(getResultsAsync({searchTerm, searchCategory, page: currentPage - 1}))}
                disabled={isLoading || currentPage === 1}
            >Previous</button>
            <button
                className='next-page-btn'
                onClick={() => dispatch(getResultsAsync({searchTerm, searchCategory, page: currentPage + 1}))}
                disabled={isLoading || currentPage === totalPages}
            >Next</button>
            <button
                className='last-page-btn'
                onClick={() => dispatch(getResultsAsync({searchTerm, searchCategory, page: totalPages}))}
                disabled={isLoading || currentPage === totalPages}
            >Last</button>
        </div>
    )
}
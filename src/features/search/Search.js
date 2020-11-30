import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getResultsAsync } from './searchSlice';
import { Buttons } from '../buttons/Buttons';
import './Search.css';

export const Search = () => {
    const dispatch = useDispatch();
    let searchTerm = '',
        isLoading = false,
        totalPages = 0;
    const [localSearchTerm, setSearchTerm] = useState('');
    const [searchCategory, setSearchCategory] = useState('placeholder');
    const currentPage = useSelector(state => state.searchSlice.currentPage);

    searchTerm = useSelector(state => state.searchSlice.searchTerm);
    isLoading = useSelector(state => state.searchSlice.isLoading);
    totalPages = useSelector(state => state.searchSlice.totalPages);

    const searchUsers = e => {
        e.preventDefault();
        dispatch(getResultsAsync({
            searchTerm: localSearchTerm,
            searchCategory
        }));
        setSearchTerm('');
    }

    const handleCategoryChange = e => {
        setSearchCategory(e.target.value)
    }

    return (
        <div className='search-component'>
            <div className='search-container'>
                <input
                    className='search-form'
                    type='text'
                    placeholder='Enter search term'
                    value={localSearchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <select className='search-type' value={searchCategory} onChange={handleCategoryChange}>
                    <option value='placeholder' disabled>Choose a category</option>
                    <option value='repositories'>Repos</option>
                    <option value='users'>Users</option>
                    <option value='topics'>Topics</option>
                </select>
                <button
                    className='search-button'
                    onClick={searchUsers}
                    disabled={searchCategory === 'placeholder'}
                >
                    Search!
                </button>
            </div>
            {totalPages > 0 &&
                <Buttons
                    searchTerm={searchTerm}
                    searchCategory={searchCategory}
                    currentPage={currentPage}
                    isLoading={isLoading}
                    totalPages={totalPages}
                />
            }
        </div>
    )
}
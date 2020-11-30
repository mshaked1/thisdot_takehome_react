import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UserResult } from './UserResult';
import { RepoResult } from './RepoResult';
import { TopicResult } from './TopicResult';
import { Buttons } from '../buttons/Buttons';

import './Results.css';

export const Results = () => {
    const dispatch = useDispatch();
    let
        searchResults = [],
        searchTerm = '',
        currentPage = 1,
        totalPages,
        isLoading = false,
        category = '',
        totalCount = 0;

    searchResults = useSelector(state => state.searchSlice.results);
    searchTerm = useSelector(state => state.searchSlice.searchTerm);
    currentPage = useSelector(state => state.searchSlice.currentPage);
    totalPages = useSelector(state => state.searchSlice.totalPages);
    isLoading = useSelector(state => state.searchSlice.isLoading);
    category = useSelector(state => state.searchSlice.category);
    totalCount = useSelector(state => state.searchSlice.totalCount);

    return (
        <div className='results-container'>
        {searchResults.length > 0 && 
            <div>
                <div className='results-header'>
                    {category.charAt(0).toUpperCase() + category.slice(1)} results for '{searchTerm}' ({totalCount} total items):
                </div>

                 <div className='results'>
            
                    {searchResults.map((result, i) => {
                    let element;
                    switch (category) {
                        case 'repositories':
                            element = <RepoResult info={result} key={i} />
                            break;
                        case 'users':
                            element = <UserResult info={result} key={i} />
                            break;
                        case 'topics':
                            element = <TopicResult info={result} key={i} />
                            break;
                    }
                    return element;
                })}                 
                <Buttons
                    searchTerm={searchTerm}
                    searchCategory={category}
                    currentPage={currentPage}
                    isLoading={isLoading}
                    totalPages={totalPages}
                 />
            </div>
            </div>
        }
        </div>
    )
}
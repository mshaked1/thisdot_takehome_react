import { createSlice } from '@reduxjs/toolkit';
import { getResults } from './githubAPI';

const searchSlice = createSlice({
  name: 'searchResults',
  initialState: {
    loading: false,
    results: [],
    category: '',
    totalCount: 0,
    currentPage: 1,
    totalPages: 0,
    searchTerm: ''
  },
  reducers: {
    loadResults: (state, action) => {
        state.results = action.payload;
    },
    setSearch: (state, action) => {
        state.searchTerm = action.payload.searchTerm;
        state.category = action.payload.category;
    },
    setCurrentPage: (state, action) => {
        state.currentPage = action.payload;
    },
    setTotalCount: (state, action) => {
        let pageCount = Math.floor(action.payload / 30);
        pageCount = action.payload % 30 === 0 ? pageCount + 1 : pageCount;
        state.totalCount = action.payload;
        state.totalPages = action.payload % 30 === 0 ? action.payload / 30 : Math.floor(action.payload / 30) + 1;
    },
    setLoading: (state, action) => {
        state.loading = action.payload;
    }
  },
});

export const { loadResults, setSearch, setCurrentPage, setTotalCount, setLoading} = searchSlice.actions;

export const getResultsAsync = ({searchTerm, searchCategory, page = 1 }) => async dispatch => {
    dispatch(setLoading(true));
    const results = await getResults(searchTerm, searchCategory, page);
    dispatch(setSearch({ searchTerm, category: searchCategory }));
    dispatch(loadResults(results.items));
    dispatch(setCurrentPage(page));
    dispatch(setTotalCount(results.total_count));
    dispatch(setLoading(false));
};

export default searchSlice.reducer;
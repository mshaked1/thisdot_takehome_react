import React from 'react';
import { Search } from './features/search/Search';
import { Results } from './features/results/Results';
import './App.css';

function App() {
  return (
    <div className="App">
      <Search />
      <Results />
    </div>
  );
}

export default App;

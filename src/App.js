import { useMemo, useState } from 'react';
import debounce from 'lodash.debounce';
import RepositoriesList from './RepositoriesList'

import './App.css';

function App() {
  const [query, setQuery] = useState('');

  const changeHandler = (event) => {
    setQuery(event.target.value);
  };

  const debouncedChangeHandler = useMemo(
    () => debounce(changeHandler, 300)
  , []);

  return (
    <div className="App">
      <header className="App-header">
        <h2>My first Apollo app 🚀</h2>
        <br/>
        <h5>Search!</h5>
        <input placeholder={"Zoeken doe je hier"} onChange={debouncedChangeHandler} />
        <RepositoriesList query={query} />
      </header>
    </div>
  );
}

export default App;
